import { frame, motion } from 'framer-motion'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        
        <p>ANİMASYON GİRİŞİ</p>
      </motion.section>

      <section className="min-h-screen flex items-center justify-center">
        <motion.button
          className="rounded-lg bg-violet-500 px-30 py-40 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          TIKLA 
        </motion.button>
      </section>

      <motion.section
        className="min-h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
      >
        <h1>Scroll Animasyonu</h1>
        <p>Animasyon Bitişi</p>
      </motion.section>
    </main>
  )
}

export default App 