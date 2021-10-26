import React, { useRef} from 'react'
import { motion } from 'framer-motion';
import './LoginExample.css';

const LoginExample = () => {
    const constraintsRef = useRef(null);
    
    return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <div className="drag-container">
            <motion.div className="drag-area" ref={constraintsRef} />
            <motion.p 
                drag dragConstraints={constraintsRef}
            >Sergio</motion.p>
            <motion.p
                drag dragConstraints={constraintsRef} dragElastic={0.2}
            >Omar</motion.p>
            <circle>A</circle>
        </div>
    </div>
    )
}

export default LoginExample;