import { ContainerFooter } from "./styles";
import logo from "../../assets/images/logo.png";


export function Footer() {
  return(
    <ContainerFooter>
      <div className="global-footer">
        <div className="container-footer">
          <img src={logo} alt="imagem do logo" />
          <h2>food explorer</h2>
        </div>

        <div className="rights">
          <p> © 2023 - Todos os direitos reservados</p>
        </div>
      </div>  
    </ContainerFooter>
  )
}