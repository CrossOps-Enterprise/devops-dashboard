const moment = require('moment')

module.exports = Object.freeze({
  CALENDAR_INITIAL_EVENTS: [
    {
      title: 'Product call',
      theme: 'GREEN',
      startTime: moment().add(-12, 'd').startOf('day'),
      endTime: moment().add(-12, 'd').endOf('day')
    },
    {
      title: 'Meeting with tech team',
      theme: 'PINK',
      startTime: moment().add(-8, 'd').startOf('day'),
      endTime: moment().add(-8, 'd').endOf('day')
    },
    {
      title: 'Meeting with Cristina',
      theme: 'PURPLE',
      startTime: moment().add(-2, 'd').startOf('day'),
      endTime: moment().add(-2, 'd').endOf('day')
    },
    {
      title: 'Meeting with Alex',
      theme: 'BLUE',
      startTime: moment().startOf('day'),
      endTime: moment().endOf('day')
    },
    {
      title: 'Product Call',
      theme: 'GREEN',
      startTime: moment().startOf('day'),
      endTime: moment().endOf('day')
    },
    {
      title: 'Client Meeting',
      theme: 'PURPLE',
      startTime: moment().startOf('day'),
      endTime: moment().endOf('day')
    },
    {
      title: 'Client Meeting',
      theme: 'ORANGE',
      startTime: moment().add(3, 'd').startOf('day'),
      endTime: moment().add(3, 'd').endOf('day')
    },
    {
      title: 'Product meeting',
      theme: 'PINK',
      startTime: moment().add(5, 'd').startOf('day'),
      endTime: moment().add(5, 'd').endOf('day')
    },
    {
      title: 'Sales Meeting',
      theme: 'GREEN',
      startTime: moment().add(8, 'd').startOf('day'),
      endTime: moment().add(8, 'd').endOf('day')
    },
    {
      title: 'Product Meeting',
      theme: 'ORANGE',
      startTime: moment().add(8, 'd').startOf('day'),
      endTime: moment().add(8, 'd').endOf('day')
    },
    {
      title: 'Marketing Meeting',
      theme: 'PINK',
      startTime: moment().add(8, 'd').startOf('day'),
      endTime: moment().add(8, 'd').endOf('day')
    },
    {
      title: 'Client Meeting',
      theme: 'GREEN',
      startTime: moment().add(8, 'd').startOf('day'),
      endTime: moment().add(8, 'd').endOf('day')
    },
    {
      title: 'Sales meeting',
      theme: 'BLUE',
      startTime: moment().add(12, 'd').startOf('day'),
      endTime: moment().add(12, 'd').endOf('day')
    },
    {
      title: 'Client meeting',
      theme: 'PURPLE',
      startTime: moment().add(16, 'd').startOf('day'),
      endTime: moment().add(16, 'd').endOf('day')
    }
  ],

  RECENT_TRANSACTIONS: [
    {
      name: 'Alex',
      avatar: 'https://reqres.in/img/faces/1-image.jpg',
      email: 'alex@syshaven.com',
      location: 'Paris',
      amount: 100,
      date: moment().endOf('day')
    },
    {
      name: 'Ereena',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
      email: 'ereena@syshaven.com',
      location: 'London',
      amount: 190,
      date: moment().add(-1, 'd').endOf('day')
    },
    {
      name: 'John',
      avatar: 'https://reqres.in/img/faces/3-image.jpg',
      email: 'jhon@syshaven.com',
      location: 'Canada',
      amount: 112,
      date: moment().add(-1, 'd').endOf('day')
    },
    {
      name: 'Matrix',
      avatar: 'https://reqres.in/img/faces/4-image.jpg',
      email: 'matrix@syshaven.com',
      location: 'Peru',
      amount: 111,
      date: moment().add(-1, 'd').endOf('day')
    },
    {
      name: 'Virat',
      avatar: 'https://reqres.in/img/faces/5-image.jpg',
      email: 'virat@syshaven.com',
      location: 'London',
      amount: 190,
      date: moment().add(-2, 'd').endOf('day')
    },
    {
      name: 'Miya',
      avatar: 'https://reqres.in/img/faces/6-image.jpg',
      email: 'miya@syshaven.com',
      location: 'Paris',
      amount: 230,
      date: moment().add(-2, 'd').endOf('day')
    },
    {
      name: 'Virat',
      avatar: 'https://reqres.in/img/faces/3-image.jpg',
      email: 'virat@syshaven.com',
      location: 'Canada',
      amount: 331,
      date: moment().add(-2, 'd').endOf('day')
    },
    {
      name: 'Matrix',
      avatar: 'https://reqres.in/img/faces/1-image.jpg',
      email: 'matrix@syshaven.com',
      location: 'London',
      amount: 581,
      date: moment().add(-2, 'd').endOf('day')
    },
    {
      name: 'Ereena',
      avatar: 'https://reqres.in/img/faces/3-image.jpg',
      email: 'ereena@syshaven.com',
      location: 'Tokyo',
      amount: 151,
      date: moment().add(-2, 'd').endOf('day')
    },
    {
      name: 'John',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
      email: 'jhon@syshaven.com',
      location: 'Paris',
      amount: 91,
      date: moment().add(-2, 'd').endOf('day')
    },
    {
      name: 'Virat',
      avatar: 'https://reqres.in/img/faces/3-image.jpg',
      email: 'virat@syshaven.com',
      location: 'Canada',
      amount: 161,
      date: moment().add(-3, 'd').endOf('day')
    },
    {
      name: 'Matrix',
      avatar: 'https://reqres.in/img/faces/4-image.jpg',
      email: 'matrix@syshaven.com',
      location: 'US',
      amount: 121,
      date: moment().add(-3, 'd').endOf('day')
    },
    {
      name: 'Ereena',
      avatar: 'https://reqres.in/img/faces/6-image.jpg',
      email: 'jhon@syshaven.com',
      location: 'Tokyo',
      amount: 713,
      date: moment().add(-3, 'd').endOf('day')
    },
    {
      name: 'John',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
      email: 'ereena@syshaven.com',
      location: 'London',
      amount: 217,
      date: moment().add(-3, 'd').endOf('day')
    },
    {
      name: 'Virat',
      avatar: 'https://reqres.in/img/faces/3-image.jpg',
      email: 'virat@syshaven.com',
      location: 'Paris',
      amount: 117,
      date: moment().add(-3, 'd').endOf('day')
    },
    {
      name: 'Miya',
      avatar: 'https://reqres.in/img/faces/7-image.jpg',
      email: 'jhon@syshaven.com',
      location: 'Canada',
      amount: 612,
      date: moment().add(-3, 'd').endOf('day')
    },
    {
      name: 'Matrix',
      avatar: 'https://reqres.in/img/faces/3-image.jpg',
      email: 'matrix@syshaven.com',
      location: 'London',
      amount: 631,
      date: moment().add(-3, 'd').endOf('day')
    },
    {
      name: 'Virat',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
      email: 'ereena@syshaven.com',
      location: 'Tokyo',
      amount: 151,
      date: moment().add(-3, 'd').endOf('day')
    },
    {
      name: 'Ereena',
      avatar: 'https://reqres.in/img/faces/3-image.jpg',
      email: 'virat@syshaven.com',
      location: 'Paris',
      amount: 617,
      date: moment().add(-3, 'd').endOf('day')
    }
  ],

  INITIAL_NODES: [
    {
      id: 'main-group',
      data: { label: 'Region: us-east-1 (ohio)' },
      position: { x: 50, y: 20 },
      type: 'customArea',
      draggable: false
    },
    {
      id: 'ec1',
      extent: 'parent',
      parentId: 'main-group',
      type: 'custom',
      data: {
        label: 'Node 1',
        description: 'EC2 instance running inside of AWS cloud'
      },
      position: { x: 250, y: 5 }
    }
  ],
  // INITIAL_NODES: [
  //   {
  //     id: 'main-group',
  //     data: { label: 'Region: us-east-1 (ohio)' },
  //     position: { x: 50, y: 20 },
  //     style: { width: 650, height: 400, fontWeight: 'bold' },
  //     draggable: false
  //   },
  //   {
  //     id: 'vpc1',
  //     data: { label: 'VPC 1\nCIDR: 10.0.0.0/16' },
  //     position: { x: 20, y: 50 },
  //     parentId: 'main-group',
  //     style: { width: 200, height: 250 },
  //     draggable: false
  //   },
  //   {
  //     id: 'vpc2',
  //     data: { label: 'VPC 2\nCIDR: 192.168.0.0/16' },
  //     position: { x: 400, y: 50 },
  //     parentId: 'main-group',
  //     style: { width: 200, height: 250 },
  //     draggable: false
  //   },
  //   {
  //     id: 'ec1',
  //     sourcePosition: 'bottom',
  //     type: 'input',
  //     data: { label: 'EC2 Instance 1\nType: t2.micro\nStatus: Running' },
  //     position: { x: 20, y: 40 },
  //     parentId: 'vpc1',
  //     extent: 'parent',
  //     style: { whiteSpace: 'pre-wrap' }
  //   },
  //   {
  //     id: 'ec2',
  //     type: 'input',
  //     sourcePosition: 'top',
  //     data: { label: 'EC2 Instance 2\nType: t2.micro\nStatus: Stopped' },
  //     position: { x: 20, y: 150 },
  //     parentId: 'vpc1',
  //     extent: 'parent',
  //     style: { whiteSpace: 'pre-wrap' }
  //   },
  //   {
  //     id: 'ec3',
  //     targetPosition: 'bottom',
  //     data: { label: 'EC2 Instance 3\nType: t2.micro\nStatus: Running' },
  //     position: { x: 20, y: 40 },
  //     parentId: 'vpc2',
  //     style: { whiteSpace: 'pre-wrap' }
  //   },
  //   {
  //     id: 'ec4',
  //     data: { label: 'EC2 Instance 4\nType: t2.micro\nStatus: Stopped' },
  //     position: { x: 20, y: 150 },
  //     parentId: 'vpc2',
  //     style: { whiteSpace: 'pre-wrap' }
  //   },
  //   {
  //     id: 'db1',
  //     targetPosition: 'left',
  //     sourcePosition: 'right',
  //     data: { label: 'Database 1\nType: RDS\nStatus: Available' },
  //     position: { x: 235, y: 150 },
  //     parentId: 'main-group',
  //     extent: 'parent',
  //     style: { whiteSpace: 'pre-wrap' }
  //   }
  // ],

  INITIAL_EDGES: [
    { id: '1-1', source: 'ec1', target: 'db1', animated: true },
    { id: '1-2', source: 'ec2', target: 'db1', animated: true },
    { id: '1-3', source: 'db1', target: 'ec3', animated: true },
    { id: '1-4', source: 'db1', target: 'ec4', animated: true }
  ]
})
