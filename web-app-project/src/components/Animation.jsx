import * as motion from "motion/react-client"

export default function Animation() {
    const box = {
    width: 100,
    height: 100,
    backgroundColor: "orange",
    borderRadius: 5,
}
    return (
        <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 10 }}
        />
    )
}
