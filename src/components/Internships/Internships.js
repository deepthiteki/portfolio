import uniqid from 'uniqid'
import { internships } from '../../portfolio'
import InternshipContainer from '../InternshipContainer/InternshipContainer'
import './internships.css'

const Internships = () => {
  if (!internships.length) return null

  return (
    <section id='internships' className='section internships'>
      <h2 className='section__title'>Internships</h2>

      <div className='internships__grid'>
        {internships.map((internship) => (
          <InternshipContainer key={uniqid()} internship={internship} />
        ))}
      </div>
    </section>
  )
}

export default Internships
