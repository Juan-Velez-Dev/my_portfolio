import meImage from '../assets/me.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Landing (): JSX.Element {
  const navigate = useNavigate()
  const handleClick = (): void => { navigate('/portfolio') }
  return (
    <div className="position-absolute top-50 start-50 translate-middle" style={{ width: '85%' } }>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="d-flex flex-row justify-content-center">
        <div className="me-5 ">
          <img src={meImage} style={{ width: '300px' }} alt="" />
        </div>
        <div className="align-self-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="text-light">
              👋Hi!, Im Juan Velez
          </motion.h1>
          <p className="text-light fs-5 pt-3 pb-3">
              Im 27-year-old, and Im a technology enthusiast from Colombia. Currently, I am in the development stage of a full stack development project, where I have been honing my programming and web development skills.
          </p>
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            className="text-light btn btn-dark">
              Get Started
          </motion.button>
        </div>
      </motion.div>
      8
    </div>
  )
}
