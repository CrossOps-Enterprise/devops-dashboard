const moment = require('moment')
const {
  FaServer,
  FaArrowRight,
  FaGlobe,
  FaNetworkWired
} = require('react-icons/fa6')

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
      id: 'jioa',
      data: { label: 'One Diversified Production', icon: FaGlobe },
      position: { x: 50, y: 20 },
      type: 'customArea',
      draggable: false
    },
    {
      id: 'kraken',
      extent: 'parent',
      parentId: 'jioa',
      type: 'subNode',
      draggable: false,
      data: {
        status: 'active',
        icon: FaArrowRight,
        label: 'KrakenD API Gateway',
        handlePosition1: 'right',
        handlePosition2: 'right'
      },
      position: { x: 700, y: 50 }
    },
    {
      id: 'jiods',
      extent: 'parent',
      parentId: 'jioa',
      type: 'custom',
      draggable: false,
      data: {
        status: 'active',
        icon: FaGlobe,
        label: 'Jupiter',
        services: ['S3 Storage', 'SpringBoot Application'],
        description: 'Intelligent Orchestration Deployment Services'
      },
      position: { x: 50, y: 300 }
    },
    {
      id: 'ce',
      extent: 'parent',
      parentId: 'jioa',
      type: 'customGroup',
      draggable: false,
      data: {
        label: 'Customer Environment'
      },
      position: { x: 700, y: 280 }
    },
    {
      id: 'dioes',
      extent: 'parent',
      parentId: 'ce',
      type: 'custom',
      draggable: false,
      data: {
        style: {
          // height: 200,
          width: 280
        },
        status: 'active',
        icon: FaNetworkWired,
        handlePosition1: 'left',
        handlePosition2: 'right',
        label: 'Demeter',
        services: ['Customers S3 Storage', 'Demeter DevOps'],
        description: 'Intelligent Orchestration via installable agents'
      },
      position: { x: 40, y: 50 }
    },
    {
      id: 'demeterAPI',
      extent: 'parent',
      parentId: 'jioa',
      type: 'connectingNode',
      draggable: false,
      data: {
        status: 'active',
        icon: FaArrowRight,
        description: 'Takes over deployment, management, logging etc',
        handlePosition2: 'right',
        label: 'Demeter API'
      },
      position: { x: 450, y: 300 }
    },
    {
      id: 'krakenApi',
      extent: 'parent',
      parentId: 'jioa',
      type: 'connectingNode',
      draggable: false,
      data: {
        status: 'active',
        icon: FaArrowRight,
        handlePosition1: 'bottom',
        handlePosition2: 'top',
        label: 'Demeter Connected to Kraken'
      },
      position: { x: 1000, y: 200 }
    }
  ],

  INITIAL_EDGES: [
    {
      id: '1',
      source: 'jiods',
      target: 'demeterAPI',
      animated: true,
      label: '',
      type: 'smoothstep'
    },
    {
      id: '2',
      source: 'demeterAPI',
      target: 'dioes',
      animated: true,
      label: '',
      type: 'smoothstep'
    },
    {
      id: '3',
      source: 'dioes',
      target: 'krakenApi',
      animated: true,
      label: '',
      type: 'smoothstep'
    },
    {
      id: '4',
      source: 'krakenApi',
      target: 'kraken',
      animated: true,
      label: '',
      type: 'smoothstep'
    }
  ]
})
