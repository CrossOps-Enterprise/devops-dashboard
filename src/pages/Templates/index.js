import React, { useState, useCallback, useEffect } from 'react'
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'

// Sample Terraform template data
const ApplicationTemplates = [
  {
    id: 'aws-basic-web',
    name: 'House Of Worship',
    description: 'Provisions a basic web application infrastructure',
    resources: [
      {
        id: 'vpc',
        type: 'aws_vpc',
        name: 'Main VPC',
        color: 'bg-blue-200'
      },
      {
        id: 'subnet',
        type: 'aws_subnet',
        name: 'Public Subnet',
        color: 'bg-green-200'
      },
      {
        id: 'ec2',
        type: 'aws_instance',
        name: 'Web Server',
        color: 'bg-purple-200'
      },
      {
        id: 'sg',
        type: 'aws_security_group',
        name: 'Web Security Group',
        color: 'bg-red-200'
      }
    ],
    tofuScript: `# AWS Basic Web Infrastructure

provider "aws" {
  region = "us-west-2"
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "Main VPC"
  }
}

resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
  
  tags = {
    Name = "Public Subnet"
  }
}

resource "aws_security_group" "web" {
  name        = "web-security-group"
  description = "Allow HTTP and SSH traffic"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public.id
  vpc_security_group_ids = [aws_security_group.web.id]

  tags = {
    Name = "Web Server"
  }
}`
  },
  {
    id: 'azure-k8s',
    name: 'Simply Live',
    description: 'Sets up a managed Kubernetes cluster',
    resources: [
      {
        id: 'rg',
        type: 'azurerm_resource_group',
        name: 'K8s Resource Group',
        color: 'bg-blue-200'
      },
      {
        id: 'aks',
        type: 'azurerm_kubernetes_cluster',
        name: 'Managed Cluster',
        color: 'bg-green-200'
      },
      {
        id: 'node_pool',
        type: 'azurerm_kubernetes_cluster_node_pool',
        name: 'Default Node Pool',
        color: 'bg-purple-200'
      }
    ],
    tofuScript: `# Azure Kubernetes Cluster

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "k8s" {
  name     = "kubernetes-resources"
  location = "East US"
}

resource "azurerm_kubernetes_cluster" "example" {
  name                = "example-aks"
  location            = azurerm_resource_group.k8s.location
  resource_group_name = azurerm_resource_group.k8s.name
  dns_prefix          = "exampleaks"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_D2_v2"
  }

  identity {
    type = "SystemAssigned"
  }
}

resource "azurerm_kubernetes_cluster_node_pool" "example" {
  name                  = "internal"
  kubernetes_cluster_id = azurerm_kubernetes_cluster.example.id
  vm_size               = "Standard_D2_v2"
  node_count            = 1
}`
  }
]

// Custom Node Component
const ResourceNode = ({ data }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${data.color}`}>
      <div className='font-bold text-sm'>{data.name}</div>
      <div className='text-xs text-gray-600'>{data.type}</div>
    </div>
  )
}

// Node types configuration
const nodeTypes = {
  resourceNode: ResourceNode
}

const TerraformTemplateDashboard = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [nodes, setNodes] = useState([])
  const [edges, setEdges] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Templates' }))
  }, [dispatch])

  // Generate nodes and edges when a template is selected
  const generateResourceFlow = useCallback((template) => {
    const generatedNodes = template.resources.map((resource, index) => ({
      id: resource.id,
      type: 'resourceNode',
      position: {
        x: 250,
        y: index * 150
      },
      data: {
        label: resource.name,
        name: resource.name,
        type: resource.type,
        color: resource.color
      }
    }))

    const generatedEdges = template.resources
      .slice(0, -1)
      .map((resource, index) => ({
        id: `edge-${resource.id}-${template.resources[index + 1].id}`,
        source: resource.id,
        target: template.resources[index + 1].id,
        type: 'step'
      }))

    setNodes(generatedNodes)
    setEdges(generatedEdges)
  }, [])

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template)
    generateResourceFlow(template)
  }

  return (
    <div className='flex h-screen'>
      {/* Template Selection Column */}
      <div className='w-1/3 p-4 bg-gray-100 overflow-y-auto'>
        <h2 className='text-2xl font-bold'>Application Templates</h2>
        <p className='text-sm text-gray-500 mb-4'>
          Select a template to visualize its resources and view the
          corresponding OpenTofu script.
        </p>
        {ApplicationTemplates.map((template) => (
          <div
            key={template.id}
            className={`p-4 mb-4 border rounded-lg cursor-pointer transition-all 
              ${
                selectedTemplate?.id === template.id
                  ? 'bg-blue-100 border-blue-500'
                  : 'bg-white hover:bg-gray-50'
              }`}
            onClick={() => handleTemplateSelect(template)}>
            <h3 className='font-semibold text-lg'>{template.name}</h3>
            <p className='text-sm text-gray-600'>{template.description}</p>
          </div>
        ))}
      </div>

      {/* Resource Visualization Column */}
      <div className='w-2/3 flex flex-col'>
        {selectedTemplate ? (
          <>
            <div className='h-1/2 relative border border-primary'>
              <div className='absolute top-2 left-2 z-10 bg-white p-2 rounded shadow'>
                <h3 className='font-semibold'>{selectedTemplate.name}</h3>
              </div>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                proOptions={{ hideAttribution: true }}>
                <Background variant='dots' />
                <Controls />
              </ReactFlow>
            </div>
            <div className='h-1/2 p-4 bg-gray-50 overflow-hidden'>
              <h4 className='text-lg font-semibold mb-2'>Terraform Script</h4>
              <SyntaxHighlighter
                language='hcl'
                style={dracula}
                customStyle={{
                  fontSize: '0.8rem',
                  borderRadius: '0.5rem',
                  maxHeight: '100%',
                  overflowY: 'auto'
                }}>
                {selectedTemplate.tofuScript}
              </SyntaxHighlighter>
            </div>
          </>
        ) : (
          <div className='flex items-center justify-center h-full text-gray-500'>
            Select a template to view its resources
          </div>
        )}
      </div>
    </div>
  )
}

export default TerraformTemplateDashboard
