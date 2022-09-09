import styled from "styled-components";
const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.div``;
const Form = styled.div``;
const Input = styled.div``;
const Agreement = styled.div``;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <Form>
            <Input placeholder="first name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement></Agreement>
          </Form>
        </Title>
      </Wrapper>
    </Container>
  );
};

export default Register;
