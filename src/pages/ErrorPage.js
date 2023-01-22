import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Container>
      <H2>
        Carga nuevamente la web: es posible que el aviso “404 not found”
        aparezca simplemente porque la página no se ha cargado correctamente
      </H2>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  color: #ffffff;
  font-family: azonix, sans-serif;
`;

export default ErrorPage;
