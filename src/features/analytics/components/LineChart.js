import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import TitleCard from '../../../components/Cards/TitleCard'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

function LineChart({ title }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  }

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ]

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: '',
        data: labels.map(() => {
          return Math.random() * 100 + 1
        }),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }

  return (
    <TitleCard title={title} topMargin='mt-6'>
      <Line
        data={data}
        options={options}
        style={{ maxHeight: '400px', width: '100%' }}
      />
    </TitleCard>
  )
}

export default LineChart
