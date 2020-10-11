import styled from "styled-components"

const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.primaryColour};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  height: 70px;
  border-radius: 10px;
  border: none;
  margin-bottom: 1rem;
  width: 100%;
  font-family: var(--font-primary);
  font-weight: var(--font-size-bold);
  font-size: 1rem;
  text-transform: uppercase;
`

export default Button

export const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.dangerColour};
  height: 45px;
`
