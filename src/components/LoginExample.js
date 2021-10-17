import React, { useRef} from 'react'
import { motion } from 'framer-motion';
import './LoginExample.css';

const LoginExample = () => {
    const constraintsRef = useRef(null);
    
    return (
            <div className="example-container" style={{margin:'5rem'}}>
                <motion.div className="drag-area" ref={constraintsRef} />
                <motion.div 
                    drag dragConstraints={constraintsRef}
                />
                <motion.div 
                    drag dragConstraints={constraintsRef}
                />

                <motion.div 
                    drag
                />
            </div>
    )
}

export default LoginExample;