import { motion } from 'framer-motion';
import React, { useRef } from 'react'

const Family = ({name, constraintsRef}) => {
    const ref = useRef(null);

    return (
        <motion.p drag  dragConstraints={constraintsRef} dragElastic={0.1}>
            {name}
        </motion.p>
    )
}

export default Family;