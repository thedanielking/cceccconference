import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Modal } from "./Modal";
import { RegistrationModal } from "./RegistrationModal";

export function AppLayout(){
    return (
        <>
        <Modal>
        <Header/>
          <Outlet />
        <Footer/>
        {/* Modal windows defined at app level */}
        <Modal.Window name="register">
          <RegistrationModal />
        </Modal.Window>
        </Modal>

        </>
    )
}