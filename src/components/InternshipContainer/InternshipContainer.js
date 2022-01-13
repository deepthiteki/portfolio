import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './InternshipContainer.css'

const InternshipContainer = ({ internship }) => (
  <div className='internship'>
    <h3>{internship.name}</h3>

    <p className='internship__description'>{internship.description}</p>
    {internship.stack && (
      <ul className='internship__stack'>
        {internship.stack.map((item) => (
          <li key={uniqid()} className='internship__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {internship.sourceCode && (
      <a
        href={internship.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target="_blank" rel="noreferrer noopener"
      >
        <GitHubIcon />
      </a>
    )}

    {internship.livePreview && (
      <a
        href={internship.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target="_blank" rel="noreferrer noopener"
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default InternshipContainer
