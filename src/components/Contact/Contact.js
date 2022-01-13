import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { contact,about } from '../../portfolio'
import './Contact.css'



const Contact = () => {
  if (!contact.email) return null
  const {social} = about;

  return (
    <div className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      
      {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank" rel="noreferrer noopener"
              >
                <LinkedInIcon />
              </a>
            )}
            
    </div>
  )
}

export default Contact
