import React, { useRef} from 'react'
import { motion } from 'framer-motion';
import './LoginExample.css';
import Family from './Family';

const LoginExample = () => {
    const constraintsRef = useRef(null);
    
    return (
    <div style={{display:'flex', justifyContent:'center', marginTop:'2rem'}}>
        <div className="drag-container">
            <motion.div className="drag-area" ref={constraintsRef} style={{width:'400px', height:'400px'}}/>
            <Family name={'Sergio'} constraintsRef={constraintsRef}></Family>
            {/* <motion.p 
                drag dragConstraints={constraintsRef} dragElastic={0.1}
            >Sergio</motion.p>
            <motion.p
                drag dragConstraints={constraintsRef} dragElastic={0.1}
            >Omar</motion.p>

            <motion.p
                drag dragConstraints={constraintsRef} dragElastic={0.1}
            >Veronica</motion.p>
            */}
            <motion.p
                drag dragConstraints={constraintsRef} dragElastic={0.1}
            >Eduardo</motion.p>
        </div>
    </div>
    )
}

export default LoginExample;