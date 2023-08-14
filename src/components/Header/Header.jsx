import { useNavigate } from "react-router-dom";
import { ContainerHeader } from "./styles";

export function HeaderComponent() {
  const navigate = useNavigate();

  const exit = (e) => {
  e.preventDefault();
  navigate(-2);
};
  return (
    <ContainerHeader>
      
      <div className="header-container">
        <h3> food explorer</h3>
        <button className="botaodesair" onClick={exit} type="submit"> Sair </button>
      </div>  
      
    </ContainerHeader>
  );
}
