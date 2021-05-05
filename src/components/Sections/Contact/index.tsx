import Title from "components/UI/Title";
import Button from "components/UI/Button";

import * as S from "./styles";

import { Container } from "styles/globals";

const ContactSection = () => {
  return (
    <S.ContactSection id="contact">
      <Container>
        <Title>Contact</Title>

        <div>
          If you want to carry out a project or chat with me, do not hesitate to
          send me an message
          <a href="https://api.whatsapp.com/send?phone=5583998269958"> WHATSAPP</a>
        </div>

        <a href="https://www.linkedin.com/in/guilherme-fernandes-a2a1341aa/" target="_blank" rel="noopener">
          <Button>Contact</Button>
        </a>
        <br />
        <a href="https://github.com/fernandesguilherme07" target="_blank" rel="noopener">
          <Button>GitHub</Button>
        </a>

      </Container>
    </S.ContactSection>
  );
};

export default ContactSection;
