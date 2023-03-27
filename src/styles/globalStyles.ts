import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --brand-1: #4367c7;
    --brand-2: #E5E8F3;

    --gray-0: #131213;
    --gray-1: #666666;
    --gray-2: #606263;
    --gray-3: #b4b4b5;
    --gray-4: #c8c8c8;
    --gray-5: #e1e1e1;
    --gray-5: #fafafb;

    --font-family: "Inter", sans-serif;

    --font-size-1: 36px;
    --font-size-2: 28px;
    --font-size-3: 16px;
    --font-size-4: 12px;

    @media (min-width: 768px) {
        --font-size-1: 46px;
        --font-size-2: 38px;
        --font-size-3: 20px;
        --font-size-4: 16px;
    }
}

* {
    box-sizing: border-box;
}
html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, small, strong, b, u, i, ol, ul, li, fieldset, form, label, article, aside, footer, header, menu, nav, summary, input, textarea, select {
	background:transparent;
	border:0;
	font-size:100%;
	margin:0;
	outline:0;
	padding:0;
	vertical-align:baseline;
}
article, aside, footer, header, nav, section {
	display:block;
}
body {
	line-height:1;
    font-family: var(--font-family);
}
body.no-scroll {
    overflow: hidden;
}
input, select {
	vertical-align:middle;
}
ol, ul {
	list-style:none;
}
`;
