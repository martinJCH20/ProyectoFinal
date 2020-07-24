import * as React from 'react';
import { SvgXml } from 'react-native-svg';
 
const xml = `
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<ellipse style="fill:#32BEA6;" cx="256" cy="256" rx="256" ry="255.832"/>
<polygon style="fill:#FFFFFF;" points="235.472,392.08 114.432,297.784 148.848,253.616 223.176,311.52 345.848,134.504 
	391.88,166.392 "/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;
 
export default Success = (props) => {
	const { height, width } = props
	return (
		<SvgXml xml={xml} width={!width ? "65" : width} height={!height ? "65" : height} />
	)
}