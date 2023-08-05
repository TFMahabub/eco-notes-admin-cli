/* eslint-disable import/no-extraneous-dependencies */
import { motion } from 'framer-motion';
import ModalHeader from './ModalHeader';

interface PropsType {
  modalTitle:string,
  children: React.ReactNode
}

function MediumModal({ modalTitle, children }: PropsType) {
  return (
    <section
      className="fixed inset-0 bg-primary/40 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="h-[85vh] aspect-[2/1] bg-secondary rounded-md overflow-y-auto scroll-hidden"
      >
        <ModalHeader
          modalTitle={modalTitle}
        />
        <div className="px-8 py-2">
          {children}
        </div>
      </motion.div>
    </section>
  );
}

export default MediumModal;
