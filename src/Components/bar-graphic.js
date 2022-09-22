import styled from "styled-components";

const GraphicBar = styled.div`
	width: ${(props) => (props.value ? props.value : "auto")};
	height: 8px;

	background: #ffec65;
	border-radius: 80px;
`;
export default GraphicBar;
