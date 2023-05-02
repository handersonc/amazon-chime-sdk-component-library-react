'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var ReactDOM = require('react-dom');
var amazonChimeSdkJs = require('amazon-chime-sdk-js');
var uuid = require('uuid');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const baseStyles = ({ css }) => css ? `@media { ${css} };` : '';
const baseSpacing = (props) => styledSystem.space(props);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledBadge = styled__default["default"].span `
  ${(props) => {
    if (typeof props.value === 'object') {
        const element = props.value;
        const width = (element.props && element.props.width) || '1rem';
        return `width: ${width};`;
    }
    return null;
}}
  display: inline-block;
  padding: ${(props) => typeof props.value === 'object' ? '0' : '0.1rem 0.4rem 0.125rem'};
  border-radius: 0.5rem;
  line-height: ${(props) => (typeof props.value === 'object' ? '1' : '1.43')};
  color: ${(props) => props.theme.colors.greys.white};
  font-size: 0.65rem;
  background-color: ${(props) => props.status === 'alert'
    ? props.theme.colors.error.primary
    : props.theme.colors.greys.grey60};

  ${baseSpacing};
  ${baseStyles}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Badge = (_a) => {
    var { value, status = 'default', className, tag } = _a, rest = __rest(_a, ["value", "status", "className", "tag"]);
    return (React__default["default"].createElement(StyledBadge, Object.assign({ className: className || '', as: tag, status: status, value: value, "data-testid": "badge" }, rest), value));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// use for elements that contain text for screen readers, but need no visual representation
const visuallyHidden = styled.css `
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute !important;
`;
const ellipsis = styled.css `
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const absoluteCenter = styled.css `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const isValidCSSHex = (hex) => {
    // matches 6 digit characters prefixed with a '#'.
    return /^#[0-9A-F]{6}$/i.test(hex);
};
const hexTorgba = (hex, alpha = 1) => {
    var _a;
    if (!isValidCSSHex(hex)) {
        return '';
    }
    const [r, g, b] = (_a = hex.match(/\w\w/g)) === null || _a === void 0 ? void 0 : _a.map((h) => parseInt(h, 16));
    return `rgba(${r}, ${g}, ${b}, ${alpha || 1})`;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledButton = styled__default["default"].button `
  border-radius: ${(props) => props.theme.radii.default};
  font-size: ${(props) => props.theme.fontSizes.text.fontSize};
  padding: 0.5rem 1rem;
  border-color: transparent;
  transition: background-color 0.1s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  .ch-icon {
    width: ${(props) => props.theme.iconButtonSizes[props.iconSize || 'sm']};
    height: ${(props) => props.theme.iconButtonSizes[props.iconSize || 'sm']};
    margin-right: 0.25rem;
  }

  /* variant styles */
  ${(props) => props.variant === 'primary' && StyledPrimaryButton}
  ${(props) => props.variant === 'secondary' && StyledSecondaryButton}
  ${(props) => props.variant === 'icon' && StyledIconButton}

  ${baseSpacing}
  ${baseStyles}
`;
const StyledPrimaryButton = styled.css `
  background-color: ${(props) => props.selected
    ? props.theme.buttons.primary.selected.bgd
    : props.theme.buttons.primary.static.bgd};
  color: ${(props) => props.selected
    ? props.theme.buttons.primary.selected.text
    : props.theme.buttons.primary.static.text};
  border: ${(props) => props.selected
    ? props.theme.buttons.primary.selected.border
    : props.theme.buttons.primary.static.border};
  box-shadow: ${(props) => props.theme.buttons.primary.static.shadow};

  &:focus {
    background-color: ${(props) => props.theme.buttons.primary.focus.bgd};
    border: ${(props) => props.theme.buttons.primary.focus.border};
    color: ${(props) => props.theme.buttons.primary.focus.text};
    box-shadow: ${(props) => props.theme.buttons.primary.focus.shadow};
  }

  &:hover {
    background-color: ${(props) => props.theme.buttons.primary.hover.bgd};
    border: ${(props) => props.theme.buttons.primary.hover.border};
    color: ${(props) => props.theme.buttons.primary.hover.text};
    box-shadow: ${(props) => props.theme.buttons.primary.hover.shadow};
  }

  &:focus:hover {
    box-shadow: ${(props) => props.theme.buttons.primary.focus.shadow};
  }

  &:active {
    background-color: ${(props) => props.theme.buttons.primary.active.bgd};
    border: ${(props) => props.theme.buttons.primary.active.border};
    color: ${(props) => props.theme.buttons.primary.active.text};
    box-shadow: ${(props) => props.theme.buttons.primary.active.shadow};
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttons.primary.disabled.bgd};
    border: ${(props) => props.theme.buttons.primary.disabled.border};
    color: ${(props) => props.theme.buttons.primary.disabled.text};
    cursor: not-allowed;
  }
`;
const StyledSecondaryButton = styled.css `
  background-color: ${(props) => props.selected
    ? props.theme.buttons.secondary.selected.bgd
    : props.theme.buttons.secondary.static.bgd};
  color: ${(props) => props.selected
    ? props.theme.buttons.secondary.selected.text
    : props.theme.buttons.secondary.static.text};
  border: ${(props) => props.selected
    ? props.theme.buttons.secondary.selected.border
    : props.theme.buttons.secondary.static.border};
  box-shadow: ${(props) => props.theme.buttons.secondary.shadow};

  &:focus {
    background-color: ${(props) => props.theme.buttons.secondary.focus.bgd};
    border: ${(props) => props.theme.buttons.secondary.focus.border};
    color: ${(props) => props.theme.buttons.secondary.focus.text};
    box-shadow: ${(props) => props.theme.buttons.secondary.focus.shadow};
  }

  &:hover {
    background-color: ${(props) => props.theme.buttons.secondary.hover.bgd};
    border: ${(props) => props.theme.buttons.secondary.hover.border};
    color: ${(props) => props.theme.buttons.secondary.hover.text};
    box-shadow: ${(props) => props.theme.buttons.secondary.hover.shadow};
  }

  &:focus:hover {
    box-shadow: ${(props) => props.theme.buttons.secondary.focus.shadow};
  }

  &:active {
    background-color: ${(props) => props.theme.buttons.secondary.active.bgd};
    border: ${(props) => props.theme.buttons.secondary.active.border};
    color: ${(props) => props.theme.buttons.secondary.active.text};
    box-shadow: ${(props) => props.theme.buttons.secondary.focus.shadow};
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttons.secondary.disabled.bgd};
    border: ${(props) => props.theme.buttons.secondary.disabled.border};
    color: ${(props) => props.theme.buttons.secondary.disabled.text};
    cursor: not-allowed;
  }
`;
const badgeLayout = {
    sm: styled.css `
    top: -15%;
    left: 76%;
  `,
    md: styled.css `
    top: 4%;
    left: 76%;
  `,
    lg: styled.css `
    top: 10%;
    left: 76%;
  `,
};
const StyledIconButton = styled.css `
  background-color: ${(props) => props.selected
    ? props.theme.buttons.icon.selected.bgd
    : props.theme.buttons.icon.static.bgd};
  color: ${(props) => props.selected
    ? props.theme.buttons.icon.selected.text
    : props.theme.buttons.icon.static.text};
  border: ${(props) => props.selected
    ? props.theme.buttons.icon.selected.border
    : props.theme.buttons.icon.static.border};
  border-radius: ${(props) => props.theme.radii.circle};
  padding: 0.1875rem;
  position: relative;

  > .ch-label {
    ${visuallyHidden};
  }

  > .ch-icon {
    width: ${(props) => props.theme.iconButtonSizes[props.iconSize || 'sm']};
    height: ${(props) => props.theme.iconButtonSizes[props.iconSize || 'sm']};
    margin: 0;
  }

  &:focus {
    background-color: ${({ theme, selected }) => selected
    ? theme.buttons.icon.selected.bgd
    : theme.buttons.icon.static.bgd};
    border: ${(props) => props.theme.buttons.icon.focus.border};
    color: ${(props) => props.theme.buttons.icon.focus.text};
    color: ${({ theme, selected }) => selected
    ? theme.buttons.icon.selected.text
    : theme.buttons.icon.static.text};
    box-shadow: ${(props) => props.theme.buttons.icon.focus.shadow};
  }

  &:hover {
    background-color: ${(props) => props.theme.buttons.icon.hover.bgd};
    border: ${(props) => props.theme.buttons.icon.hover.border};
    color: ${(props) => props.theme.buttons.icon.hover.text};
  }

  &:active {
    background-color: ${(props) => props.theme.buttons.icon.active.bgd};
    border: ${(props) => props.theme.buttons.icon.active.border};
    color: ${(props) => props.theme.buttons.icon.active.text};
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttons.icon.disabled.bgd};
    border: ${(props) => props.theme.buttons.icon.disabled.border};
    color: ${(props) => props.theme.buttons.icon.disabled.text};
    cursor: not-allowed;
  }

  + * {
    position: absolute;
    font-size: 0.55rem;
    z-index: 1;
    ${({ iconSize }) => (iconSize ? badgeLayout[iconSize] : badgeLayout['sm'])}
  }
`;
const StyledIconButtonWrapper = styled__default["default"].span `
  display: inline-block;
  position: relative;
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Button = React.forwardRef((props, ref) => (React__default["default"].createElement(StyledButton, Object.assign({}, props, { className: props.className || '', as: props.tag, ref: ref, "aria-label": props.label, "data-testid": "button", disabled: props.disabled }),
    props.icon && (React__default["default"].createElement("span", { className: "ch-icon", "data-testid": "button-icon" }, props.icon)),
    React__default["default"].createElement("span", { className: "ch-label", "data-testid": "button-label" }, props.label))));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const PrimaryButton = React.forwardRef((props, ref) => (React__default["default"].createElement(Button, Object.assign({ variant: "primary" }, props))));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const SecondaryButton = React.forwardRef((props, ref) => (React__default["default"].createElement(Button, Object.assign({ variant: "secondary" }, props))));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const IconButton = React.forwardRef((props, ref) => (React__default["default"].createElement(StyledIconButtonWrapper, null,
    React__default["default"].createElement(Button, Object.assign({ ref: ref, variant: "icon" }, props)),
    props.badge)));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Svg = (_a) => {
    var { className, children, viewBox = '0 0 24 24', xmlns = 'http://www.w3.org/2000/svg', width, height, title } = _a, otherProps = __rest(_a, ["className", "children", "viewBox", "xmlns", "width", "height", "title"]);
    // This is necessary because some versions of Firefox would not use rems as values
    // for width and height attributes: https://bugzilla.mozilla.org/show_bug.cgi?id=1231147
    const styles = {
        width: width,
        height: height,
    };
    return (React__default["default"].createElement("svg", Object.assign({ xmlns: xmlns, className: `Svg ${className || ''}`, height: height, style: styles, viewBox: viewBox, width: width }, otherProps),
        title && React__default["default"].createElement("title", null, title),
        React__default["default"].createElement("g", { fillRule: "evenodd", fill: "currentColor" }, children)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Add = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M14.5 5C16.981 5 19 7.019 19 9.5v5c0 2.481-2.019 4.5-4.5 4.5h-5C7.019 19 5 16.981 5 14.5v-5C5 7.019 7.019 5 9.5 5zm0 1h-5C7.57 6 6 7.57 6 9.5v5C6 16.43 7.57 18 9.5 18h5c1.93 0 3.5-1.57 3.5-3.5v-5C18 7.57 16.43 6 14.5 6zM12 8.467c.276 0 .5.223.5.5V11.5h2.533c.276 0 .5.224.5.5s-.224.5-.5.5H12.5v2.533c0 .277-.224.5-.5.5-.277 0-.5-.223-.5-.5V12.5H8.967c-.277 0-.5-.224-.5-.5s.223-.5.5-.5H11.5V8.967c0-.277.223-.5.5-.5z" })));
Add.displayName = 'Add';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const dirTransform$1 = {
    up: '0',
    right: '90',
    down: '180',
    left: '270',
};
const StyledArrow = styled__default["default"](Svg) `
  transform: ${({ direction }) => `rotate(${dirTransform$1[direction || 'up']}deg)`};
`;
const Arrow = (_a) => {
    var { direction = 'up' } = _a, rest = __rest(_a, ["direction"]);
    return (React__default["default"].createElement(StyledArrow, Object.assign({ direction: direction }, rest),
        React__default["default"].createElement("path", { "transform-origin": "center", d: "M16.85 10.53l-4.495-4.39c-.094-.09-.214-.132-.335-.136C12.013 6.003 12.007 6 12 6c-.006 0-.012.003-.02.004-.12.004-.24.047-.334.137L7.15 10.53c-.197.193-.201.51-.008.707.098.1.228.15.357.15.126 0 .252-.046.35-.141l3.646-3.56v9.812c0 .277.223.5.5.5.276 0 .5-.223.5-.5V7.677l3.655 3.57c.097.095.223.142.349.142.13 0 .26-.05.358-.151.193-.197.189-.514-.008-.707" })));
};
Arrow.displayName = 'Arrow';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Attachment = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M9.388 18.995c-1.171 0-2.337-.44-3.196-1.312-.804-.816-1.227-1.885-1.19-3.011.037-1.137.536-2.192 1.407-2.967l6.629-5.91c1.246-1.108 3.201-1.051 4.359.127.57.578.869 1.337.84 2.135-.031.799-.383 1.538-.994 2.08l-6.41 5.715c-.365.328-.841.494-1.303.462-.454-.011-.898-.202-1.227-.536-.335-.34-.509-.786-.491-1.255.016-.467.222-.9.58-1.219l6.211-5.538c.207-.185.522-.165.706.041.183.206.166.522-.04.706l-6.211 5.538c-.154.137-.239.313-.246.509-.008.195.062.373.204.517.146.148.347.233.563.239.213.016.423-.062.587-.209l6.412-5.717c.406-.36.639-.846.659-1.37.019-.52-.177-1.015-.552-1.396-.793-.805-2.129-.841-2.982-.083l-6.628 5.91c-.665.592-1.045 1.392-1.074 2.253-.027.85.293 1.659.903 2.277 1.285 1.303 3.456 1.363 4.834.134l6.429-5.731c.207-.184.522-.166.706.041.184.206.166.522-.04.705l-6.429 5.731c-.851.759-1.936 1.134-3.016 1.134" })));
Attachment.displayName = 'Attachment';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Attendees = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12.105 12.923c1.596 0 2.895 1.3 2.895 2.895v2.105H6v-2.105c0-1.596 1.299-2.895 2.895-2.895zm3.767.571c.139-.24.447-.32.684-.182.89.517 1.444 1.477 1.444 2.506v1.605c0 .277-.223.5-.5.5-.276 0-.5-.223-.5-.5v-1.605c0-.673-.362-1.302-.946-1.641-.238-.138-.32-.444-.182-.683zm-3.767.43h-3.21c-1.045 0-1.895.85-1.895 1.894v1.105h7v-1.105c0-1.045-.85-1.895-1.895-1.895zM10.645 6c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm3.385.488c.096-.259.386-.39.642-.298 1.18.433 1.972 1.562 1.972 2.81s-.793 2.377-1.972 2.81c-.057.02-.115.03-.172.03-.204 0-.396-.126-.47-.328-.095-.26.038-.547.298-.642.787-.288 1.316-1.04 1.316-1.87 0-.83-.529-1.582-1.316-1.87-.26-.095-.393-.383-.298-.642zM10.645 7c-1.104 0-2 .897-2 2s.896 2 2 2c1.103 0 2-.897 2-2s-.897-2-2-2z" })));
Attendees.displayName = 'Attendees';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Camera = (_a) => {
    var { disabled = false } = _a, rest = __rest(_a, ["disabled"]);
    return (React__default["default"].createElement(Svg, Object.assign({}, rest), disabled ? (React__default["default"].createElement("path", { xmlns: "http://www.w3.org/2000/svg", d: "M4.146 4.146c.196-.195.512-.195.708 0L7.707 7h.007l1 1h-.007L15 14.293v-.007l.894.894-.001.006 3.961 3.96c.195.196.195.512 0 .708-.098.097-.226.146-.354.146-.128 0-.256-.049-.354-.146l-3.747-3.748c-.459.542-1.134.894-1.899.894h-7C5.121 17 4 15.879 4 14.5v-5c0-1.314 1.022-2.383 2.312-2.481L4.146 4.854c-.195-.196-.195-.512 0-.708zM7.293 8H6.5C5.673 8 5 8.673 5 9.5v5c0 .827.673 1.5 1.5 1.5h7c.488 0 .919-.238 1.192-.601L7.293 8zM13.5 7C14.879 7 16 8.121 16 9.5v.566l1.813-1.303c.426-.306.983-.349 1.456-.107.451.231.731.684.731 1.181v4.326c0 .497-.28.95-.731 1.181-.205.104-.424.156-.642.156-.287 0-.571-.089-.814-.263l-1.592-1.144L15 12.873V9.5c0-.827-.673-1.5-1.5-1.5h-3.372l-1-1zm5.313 2.546c-.051-.026-.233-.1-.416.03l-2.256 1.621c-.089.064-.141.16-.141.262v1.082c0 .102.051.197.141.262l2.256 1.622c.182.131.365.054.416.03.055-.029.187-.116.187-.292V9.837c0-.176-.132-.263-.187-.29z" })) : (React__default["default"].createElement("path", { d: "M19 14.164c0 .176-.131.262-.187.29-.052.027-.234.1-.416-.028l-2.256-1.622v-.001c-.09-.064-.141-.16-.141-.262v-1.082c0-.102.051-.197.141-.262l2.255-1.622c.081-.057.159-.075.227-.075.09 0 .16.03.19.046.056.029.187.115.187.29v4.328zm-4 .336c0 .828-.673 1.5-1.5 1.5h-7c-.827 0-1.5-.672-1.5-1.5v-5C5 8.673 5.673 8 6.5 8h7c.827 0 1.5.673 1.5 1.5v5zm4.27-5.843c-.471-.242-1.028-.202-1.457.106L16 10.066V9.5C16 8.122 14.879 7 13.5 7h-7C5.121 7 4 8.122 4 9.5v5C4 15.879 5.121 17 6.5 17h7c1.379 0 2.5-1.121 2.5-2.5v-.566l1.814 1.304c.243.174.527.262.813.262.219 0 .438-.051.643-.156.45-.231.73-.683.73-1.18V9.837c0-.497-.28-.95-.73-1.18z" }))));
};
Camera.displayName = 'Camera';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const dirTransform = {
    up: '0',
    right: '90',
    down: '180',
    left: '270',
};
const StyledCaret = styled__default["default"](Svg) `
  transform: ${({ direction }) => `rotate(${dirTransform[direction || 'up']}deg)`};
`;
const Caret = (_a) => {
    var { direction = 'up' } = _a, rest = __rest(_a, ["direction"]);
    return (React__default["default"].createElement(StyledCaret, Object.assign({ direction: direction }, rest),
        React__default["default"].createElement("path", { "transform-origin": "center", d: "M8.824 13.88c-.21.18-.526.154-.705-.056-.159-.187-.156-.457-.006-.64l.063-.065 3.523-3c.165-.14.397-.156.577-.05l.074.052 3.477 3c.209.18.232.497.052.706-.16.185-.428.224-.632.104l-.074-.052-3.151-2.72-3.198 2.722z" })));
};
Caret.displayName = 'Caret';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const defaultStyle = styled.css `
  .ch-caution-background {
    fill: transparent;
  }
`;
const warningStyle = styled.css `
  .ch-caution-background {
    fill: ${(props) => props.theme.colors.warning.primary};
  }

  .ch-caution-exclamation {
    fill: ${(props) => props.theme.colors.greys.white};
  }

  .ch-caution-border {
    fill: ${(props) => props.theme.colors.warning.primary};
  }
`;
const errorStyle = styled.css `
  .ch-caution-background {
    fill: ${(props) => props.theme.colors.error.primary};
  }

  .ch-caution-exclamation {
    fill: ${(props) => props.theme.colors.greys.white};
  }

  .ch-caution-border {
    fill: ${(props) => props.theme.colors.error.primary};
  }
`;
const variantMap = {
    default: defaultStyle,
    'fill-warning': warningStyle,
    'fill-error': errorStyle,
};
const StyledCaution = styled__default["default"].g `
  ${(props) => variantMap[props.variant || 'default']};
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Caution = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement(StyledCaution, { fill: "currentColor", variant: props.variant },
        React__default["default"].createElement("path", { className: "ch-caution-background", d: "M18.728 15.186l-5.085-8.281C13.293 6.338 12.68 6 12 6c-.68 0-1.294.338-1.642.905l-5.085 8.281c-.351.571-.365 1.258-.04 1.841.336.6.98.972 1.68.972h10.17c.704 0 1.348-.372 1.683-.972.326-.583.312-1.27-.04-1.841" }),
        React__default["default"].createElement("path", { className: "ch-caution-exclamation", d: "M12.572 14.609v1.219h-1.166v-1.219h1.166zm.023-5.388v1.83l-.288 2.727h-.597l-.305-2.727V9.22h1.19z" }),
        React__default["default"].createElement("path", { className: "ch-caution-border", d: "M17.894 16.539c-.161.288-.463.46-.81.46H6.915c-.343 0-.645-.172-.806-.46-.15-.266-.143-.568.017-.829l5.085-8.281c.33-.536 1.25-.538 1.58 0l5.086 8.281c.16.261.167.563.018.829m.834-1.353l-5.085-8.281C13.293 6.338 12.68 6 12 6c-.68 0-1.294.338-1.642.905l-5.085 8.281c-.351.571-.365 1.258-.04 1.841.336.6.98.972 1.68.972h10.17c.704 0 1.348-.372 1.683-.972.326-.583.312-1.27-.04-1.841" }))));
Caution.displayName = 'Caution';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Chat = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props, { title: "Chat" }),
    React__default["default"].createElement("path", { d: "M8.497 6C7.12 6 6 7.12 6 8.497v9.413l1.022-.727c1.483-1.054 4.17-1.911 5.99-1.911h2.48c1.376 0 2.496-1.121 2.496-2.498V8.497C17.988 7.12 16.868 6 15.491 6H8.497zM5.905 19c-.14 0-.284-.034-.416-.102-.302-.156-.489-.464-.489-.804V8.497C5 6.569 6.568 5 8.497 5h6.994c1.93 0 3.497 1.569 3.497 3.497v4.277c0 1.929-1.568 3.498-3.497 3.498h-2.48c-1.616 0-4.093.791-5.409 1.727l-1.172.833c-.158.111-.34.168-.525.168z" })));
Chat.displayName = 'Chat';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Check = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M16.834 9.178c-.18-.21-.494-.238-.705-.061l-5.912 4.975-2.33-2.846c-.175-.214-.491-.245-.703-.07-.214.175-.246.49-.071.703l2.652 3.238.004.006c.037.044.085.073.132.1.015.01.026.025.04.032.068.03.138.046.21.046.056 0 .113-.01.166-.028.038-.013.07-.037.106-.06.015-.01.03-.014.045-.025v-.001l.006-.003 6.299-5.301c.21-.178.239-.493.06-.705" })));
Check.displayName = 'Check';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const CheckRound = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.86 0-7 3.141-7 7s3.14 7 7 7 7-3.141 7-7-3.14-7-7-7zm3.493 4.873c.211-.179.526-.15.705.061.177.211.15.527-.061.705l-4.476 3.764-.003.002v.001c-.029.024-.061.035-.091.051-.02.011-.039.027-.061.035-.054.019-.11.028-.166.028-.072 0-.143-.015-.209-.045-.016-.007-.027-.023-.042-.032-.047-.028-.095-.056-.132-.1l-.001-.002-.003-.004-1.84-2.246c-.175-.213-.143-.529.07-.703.213-.177.529-.145.704.07l1.518 1.853z" })));
CheckRound.displayName = 'CheckRound';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Clear = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props, { title: "Clear" }),
    React__default["default"].createElement("path", { d: "M12 5c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7zM9.172 9.17c-.196.196-.196.513 0 .708L11.293 12l-2.12 2.12c-.197.197-.197.513 0 .708.096.098.224.147.352.147.128 0 .256-.05.354-.147L12 12.707l2.121 2.12c.098.099.226.148.353.148.128 0 .256-.05.354-.147.195-.195.195-.511 0-.707L12.708 12l2.12-2.122c.195-.195.195-.512 0-.707-.195-.195-.512-.195-.707 0l-2.12 2.12-2.122-2.12c-.196-.195-.512-.195-.707 0z" })));
Clear.displayName = 'Clear';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Clock = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 2.559c.276 0 .5.223.5.5V11.5h3c.276 0 .5.224.5.5s-.224.5-.5.5H12c-.276 0-.5-.224-.5-.5V8.059c0-.277.224-.5.5-.5z" })));
Clock.displayName = 'Clock';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Cog = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12.616 4C13.379 4 14 4.62 14 5.384c0 .31.171.566.457.684.286.118.588.059.808-.16.539-.54 1.415-.54 1.956-.001l.872.873c.539.539.539 1.417 0 1.956-.22.219-.28.52-.161.807.118.286.374.457.684.457.763 0 1.384.62 1.384 1.384v1.233C20 13.38 19.379 14 18.616 14c-.309 0-.565.17-.684.458-.119.286-.059.588.161.807.539.54.539 1.417 0 1.956l-.872.873c-.541.539-1.417.539-1.956 0-.22-.22-.522-.28-.808-.161-.286.119-.457.374-.457.684C14 19.38 13.379 20 12.616 20h-1.233C10.62 20 10 19.38 10 18.617c0-.31-.171-.565-.457-.684-.292-.12-.589-.06-.808.16-.539.539-1.417.54-1.956 0l-.872-.872c-.261-.261-.405-.608-.406-.978 0-.37.145-.717.406-.98.219-.217.28-.52.16-.805-.119-.287-.375-.458-.684-.458C4.62 14 4 13.38 4 12.617v-1.233C4 10.62 4.62 10 5.383 10c.309 0 .566-.171.684-.457.119-.286.059-.588-.16-.807-.261-.261-.406-.61-.406-.978 0-.37.145-.717.406-.98l.872-.87c.537-.54 1.415-.541 1.956 0 .219.219.523.28.807.16.287-.118.458-.374.458-.684C10 4.62 10.62 4 11.383 4zm0 1h-1.233c-.211 0-.383.172-.383.384 0 .717-.412 1.334-1.075 1.608-.662.274-1.39.13-1.897-.377-.15-.15-.391-.15-.542 0l-.872.872c-.073.072-.113.169-.113.27 0 .103.04.199.113.272.507.507.652 1.234.377 1.897-.274.663-.89 1.074-1.608 1.074-.211 0-.383.172-.383.384v1.233c0 .21.172.383.383.383.718 0 1.334.412 1.608 1.075.275.663.13 1.39-.377 1.897-.073.073-.113.169-.113.27.001.104.04.199.113.27l.872.875c.152.15.393.149.542 0 .337-.338.772-.515 1.22-.515.226 0 .455.045.677.137.663.275 1.075.89 1.075 1.608 0 .21.172.383.383.383h1.233c.212 0 .384-.172.384-.383 0-.717.411-1.333 1.074-1.608.659-.272 1.389-.13 1.898.378.149.149.394.149.542-.001l.872-.872c.149-.15.149-.393 0-.542-.508-.507-.653-1.234-.378-1.897.274-.663.89-1.075 1.608-1.075.212 0 .384-.172.384-.383v-1.233c0-.212-.172-.384-.384-.384-.718 0-1.334-.412-1.608-1.075-.275-.662-.13-1.39.378-1.896.149-.15.149-.393 0-.542l-.872-.872c-.15-.15-.393-.15-.542 0-.509.508-1.239.65-1.898.377C13.412 6.717 13 6.1 13 5.384c0-.212-.172-.384-.384-.384zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0 1c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" })));
Cog.displayName = 'Cog';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ConnectionProblem = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M6.113 13.03h3.5c.496 0 .898.403.898.898v4.91l6.398-7.808h-3.5c-.495 0-.898-.402-.898-.897V5.19l-6.398 7.84zm4.295 6.995c-.108 0-.215-.02-.32-.06-.35-.133-.577-.462-.577-.837V14.03H5.9c-.358 0-.673-.204-.82-.532-.147-.327-.09-.698.149-.966l6.7-8.213c.265-.296.65-.395 1.004-.258.35.133.577.462.577.837v5.132h3.604c.36 0 .676.205.823.533.148.328.09.7-.148.969l-6.7 8.176c-.184.208-.43.317-.682.317z" })));
ConnectionProblem.displayName = 'ConnectionProblem';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ScreenShare = (_a) => {
    var { title = 'Screen share' } = _a, rest = __rest(_a, ["title"]);
    return (React__default["default"].createElement(Svg, Object.assign({}, rest, { title: title }),
        React__default["default"].createElement("path", { d: "M15.5 17c.276 0 .5.224.5.5s-.224.5-.5.5h-7c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zM18 6c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2H6c-1.103 0-2-.897-2-2V8c0-1.103.897-2 2-2zm0 1H6c-.552 0-1 .449-1 1v6c0 .551.448 1 1 1h12c.552 0 1-.449 1-1V8c0-.551-.448-1-1-1z" })));
};
ScreenShare.displayName = 'ScreenShare';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Crown = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M16.116 16h-8.23l-1.674-4.994 1.973 1.607c.355.289.815.388 1.257.274.444-.116.795-.427.965-.853L12 8.019l1.593 4.015c.17.426.521.737.964.853.444.114.903.015 1.257-.274l1.972-1.606L16.116 16zm.39 2h-9.01C7.22 18 7 17.778 7 17.495c0-.273.221-.495.495-.495h9.011c.272 0 .494.222.494.505 0 .273-.222.495-.495.495zM19 8.105c-.552 0-1 .457-1 1.018 0 .184.061.347.145.496-.164.01-.324.07-.458.179l-2.504 2.039c-.106.087-.242.116-.374.082-.13-.035-.237-.127-.287-.254l-1.776-4.477c-.052-.132-.144-.23-.25-.306.295-.176.504-.49.504-.864C13 5.457 12.552 5 12 5s-1 .457-1 1.018c0 .374.21.688.505.864-.108.076-.2.173-.25.305l-1.778 4.478c-.049.127-.155.219-.287.254-.13.034-.266.005-.374-.082L6.312 9.798c-.133-.109-.294-.169-.458-.179.084-.149.146-.312.146-.496 0-.561-.448-1.018-1-1.018s-1 .457-1 1.018c0 .561.448 1.017 1 1.017.02 0 .035-.01.054-.011-.056.151-.066.324-.02.506l1.845 5.502c-.517.236-.879.757-.879 1.368C6 18.329 6.671 19 7.495 19h9.01C17.33 19 18 18.329 18 17.495c0-.603-.362-1.121-.877-1.357l1.853-5.541c.04-.161.028-.322-.028-.468.02.001.033.011.052.011.552 0 1-.456 1-1.017 0-.561-.448-1.018-1-1.018z" })));
Crown.displayName = 'Crown';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const DeskPhone = (_a) => {
    var { disabled = false, poorConnection = false } = _a, rest = __rest(_a, ["disabled", "poorConnection"]);
    return (React__default["default"].createElement(Svg, Object.assign({}, rest), poorConnection ? (disabled ? (React__default["default"].createElement("path", { d: "M4.146 4.147c.196-.196.512-.196.707 0l15 15c.196.195.196.511 0 .707-.097.097-.225.146-.353.146-.128 0-.256-.049-.354-.146l-.938-.939c-.13.051-.266.085-.413.085h-.125v-.623L16.293 17H16v-.294l-1.628-1.628H14v-.372L12.293 13H12v-.294l-1-1v4.138C11 16.482 10.48 17 9.843 17H8.156C7.52 17 7 16.482 7 15.844V7.706L6.293 7h-.058c-.08 0-.138.06-.152.12l-.973-.235c.065-.266.218-.488.422-.645L4.146 4.854c-.195-.196-.195-.512 0-.707zm1.858 13.734c.014.06.071.12.152.12h.125v1h-.125c-.537 0-.999-.365-1.125-.886zM8.263 18v1h-1v-1h1zm2.106 0v1h-1v-1h1zm2.107 0v1h-1v-1h1zm2.106 0v1h-1v-1h1zm2.107 0v1h-1v-1h1zm-3.69-2v1h-1v-1h1zM15 16v1h-1.001v-1H15zm-9 0v1H5v-1h1zm13 0v.907L18.093 16H19zM8 8.706v7.138c0 .086.07.156.156.156h1.687c.086 0 .156-.07.156-.156v-5.138l-2-2zm4.999 5.372v1.001h-1v-1.001h1zM19 14v1h-1v-1h1zM6 14v1H5v-1h1zm11 .078v.828l-.829-.828H17zM17 12v1.001h-1V12h1zm2 0v1h-1v-1h1zM6 12v1H5v-1h1zm9 0v.906L14.092 12H15zM9.843 5C10.48 5 11 5.52 11 6.156V8h5.172c.457 0 .828.372.828.83v1.341c0 .457-.371.83-.828.83h-3.078l-1-1H16V9h-4.906L10 7.905v-1.75C10 6.07 9.929 6 9.844 6H8.157c-.018 0-.03.014-.045.02l-.717-.718C7.599 5.12 7.862 5 8.157 5zM19 10v1h-1v-1h1zM6 10v1H5v-1h1zm13-2v1h-1V8h1zM6 8v1H5V8h1zm11.876-2c.537 0 .999.364 1.125.885l-.973.234c-.014-.06-.071-.119-.152-.119h-.125V6zm-5.321 0v1h-1V6h1zm2.106 0v1h-1V6h1zm2.108 0v1h-1V6h1z" })) : (React__default["default"].createElement("path", { d: "M6.003 17.882c.012.047.05.095.107.112l.045.007h.125v1h-.125c-.495 0-.927-.311-1.09-.768l-.035-.117.973-.234zM8.262 18v1h-1v-1h1zm2.107 0v1h-1v-1h1zm2.107 0v1h-1v-1h1zm2.107 0v1h-1v-1h1zm2.106 0v1h-1v-1h1zm1.259-.118l.973.234c-.117.48-.52.828-1.003.879l-.122.006h-.125v-1h.125c.08 0 .139-.061.152-.119zM9.843 5c.595 0 1.087.453 1.15 1.032l.007.125v1.844h5.172c.422 0 .77.316.822.725l.006.103v1.342c0 .422-.316.772-.724.823l-.104.007H11v4.843c0 .595-.452 1.087-1.031 1.15L9.843 17H8.156c-.595 0-1.086-.452-1.15-1.03L7 15.842V6.159c0-.596.451-1.088 1.03-1.15L8.156 5h1.687zM6 16v1H5v-1h1zm13 0v1h-1v-1h1zm-6.001 0v1h-1v-1h1zM15 16v1h-1v-1h1zm2 0v1h-1v-1h1zM9.843 6H8.156c-.069 0-.127.045-.148.108L8 6.158v9.685c0 .07.045.129.107.15l.049.007h1.687c.069 0 .128-.045.149-.107l.008-.05V6.159C10 6.07 9.929 6 9.843 6zm3.156 8.079v1h-1v-1h1zm2.001 0v1h-1v-1h1zm2 0v1h-1v-1h1zM6 14v1H5v-1h1zm13 0v1h-1v-1h1zM6 12.003v1H5v-1h1zm13 0v1h-1v-1h1zM12.999 12v1h-1v-1h1zM15 12v1h-1v-1h1zm2 0v1h-1v-1h1zM6 10.003v1H5v-1h1zm13 0v1h-1v-1h1zM16 9h-5v1h5V9zm3-1v1h-1V8h1zM6 8v1H5V8h1zm.361-2v1h-.125c-.065 0-.115.039-.139.084l-.013.036-.973-.234c.116-.481.519-.828 1.003-.879l.122-.006h.125zm11.514.001c.496 0 .927.31 1.09.768l.035.117-.973.234c-.011-.049-.05-.096-.106-.112L17.875 7h-.125v-1h.125zm-5.32 0v1h-1V6h1zm2.107 0v1h-1V6h1zm2.106 0v1h-1V6h1z" }))) : disabled ? (React__default["default"].createElement("path", { d: "M4.146 4.146c.196-.195.512-.195.707 0l15 15c.196.196.196.512 0 .708-.097.097-.225.146-.353.146-.128 0-.256-.049-.354-.146l-.923-.923c-.119.042-.245.069-.379.069H6.156C5.518 19 5 18.481 5 17.844V7.156c0-.394.211-.726.513-.935L4.146 4.854c-.195-.196-.195-.512 0-.708zM6.293 7h-.137C6.07 7 6 7.07 6 7.156v10.688c0 .086.07.156.156.156h11.137l-1-1H16v-.293l-1.629-1.629h-.37v-.371L12.292 13H12v-.293l-1-1v4.137C11 16.481 10.481 17 9.844 17H8.156C7.518 17 7 16.481 7 15.844V7.707L6.293 7zM13 16v1h-1v-1h1zm2 0v1h-1v-1h1zM9.843 5c.542 0 .979.379 1.103.882L10.97 6h6.875c.595 0 1.086.452 1.15 1.03l.006.126v9.76l-1-1v-8.76c0-.069-.045-.127-.107-.148L17.844 7H11v1h5.171c.422 0 .771.317.823.725L17 8.83v1.342c0 .422-.317.771-.725.823l-.104.006h-3.087l-1-1H16V9h-4.916L10 7.916v-1.76c0-.069-.045-.127-.107-.148L9.843 6H8.156l-.026.008-.025.013-.716-.716c.171-.153.384-.263.621-.295L8.156 5h1.687zM8 8.707v7.137c0 .086.07.156.156.156h1.688c.085 0 .156-.07.156-.156v-5.137l-2-2zm5 5.371v1h-1v-1h1zm4 0v.837l-.838-.837H17zM17 12v1h-1v-1h1zm-2 0v.916L14.084 12H15z" })) : (React__default["default"].createElement("path", { d: "M9.844 5c.582 0 1.045.44 1.125 1h6.875C18.481 6 19 6.519 19 7.157v10.687c0 .638-.519 1.156-1.156 1.156H6.156C5.519 19 5 18.482 5 17.844V7.157C5 6.519 5.519 6 6.156 6h.875c.08-.56.543-1 1.125-1zM7 7h-.844C6.07 7 6 7.07 6 7.157v10.687c0 .086.07.156.156.156h11.688c.086 0 .156-.07.156-.156V7.157C18 7.07 17.93 7 17.844 7H11v1h5.171c.457 0 .829.372.829.829v1.343c0 .457-.372.828-.829.828H11v4.844C11 16.482 10.481 17 9.844 17H8.156C7.519 17 7 16.482 7 15.844V7zm6 9v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM9.844 6H8.156C8.07 6 8 6.07 8 6.157v9.687c0 .086.07.156.156.156h1.688c.086 0 .156-.07.156-.156V6.157C10 6.07 9.93 6 9.844 6zM13 14.078v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM13 12v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm-1-3h-5v1h5V9z" }))));
};
DeskPhone.displayName = 'DeskPhone';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Dialer = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12 15.972c1.11 0 2.014.904 2.014 2.015C14.014 19.097 13.11 20 12 20c-1.11 0-2.014-.903-2.014-2.013 0-1.111.904-2.015 2.014-2.015zm0 1.036c-.54 0-.977.44-.977.979 0 .54.438.977.977.977.54 0 .977-.438.977-.977 0-.54-.438-.979-.977-.979zm-4.986-6.022c1.11 0 2.014.904 2.014 2.014 0 1.11-.904 2.014-2.014 2.014C5.904 15.014 5 14.11 5 13c0-1.11.904-2.014 2.014-2.014zm4.986 0c1.11 0 2.014.904 2.014 2.014 0 1.11-.904 2.014-2.014 2.014-1.11 0-2.014-.904-2.014-2.014 0-1.11.904-2.014 2.014-2.014zm4.986 0c1.11 0 2.014.904 2.014 2.014 0 1.11-.904 2.014-2.014 2.014-1.11 0-2.014-.904-2.014-2.014 0-1.11.904-2.014 2.014-2.014zm-9.972 1.036c-.54 0-.977.439-.977.978 0 .54.438.978.977.978.54 0 .977-.438.977-.978 0-.539-.437-.978-.977-.978zm4.986 0c-.54 0-.977.439-.977.978 0 .54.438.978.977.978.54 0 .977-.438.977-.978 0-.539-.438-.978-.977-.978zm4.986 0c-.54 0-.977.439-.977.978 0 .54.437.978.977.978s.977-.438.977-.978c0-.539-.438-.978-.977-.978zM7.014 6c1.11 0 2.014.903 2.014 2.014 0 1.11-.904 2.014-2.014 2.014C5.904 10.028 5 9.124 5 8.014 5 6.904 5.904 6 7.014 6zM12 6c1.11 0 2.014.903 2.014 2.014 0 1.11-.904 2.014-2.014 2.014-1.11 0-2.014-.904-2.014-2.014C9.986 6.904 10.89 6 12 6zm4.986 0C18.096 6 19 6.904 19 8.013c0 1.111-.904 2.015-2.014 2.015-1.11 0-2.014-.904-2.014-2.015 0-1.11.904-2.013 2.014-2.013zM7.014 7.036c-.54 0-.977.439-.977.978 0 .54.438.978.977.978.54 0 .977-.438.977-.978s-.437-.978-.977-.978zm4.986 0c-.54 0-.977.439-.977.978 0 .54.438.978.977.978.54 0 .977-.438.977-.978s-.438-.978-.977-.978zm4.986 0c-.54 0-.977.438-.977.977 0 .54.437.979.977.979s.977-.439.977-.979c0-.539-.438-.977-.977-.977z" })));
Dialer.displayName = 'Dialer';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Dislike = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M18.977 11.946l-1.29-4.575C17.528 6.577 16.818 6 16 6H9.126c-.197 0-.357.158-.357.352V12.614l3.034 5.353c.123.044.45.069.76-.105.479-.271.732-.897.733-1.842l.089-1.43c.02-.45.389-.803.84-.803h3.194c.479 0 .926-.211 1.228-.58.298-.364.415-.837.33-1.261M7.337 6h-1.99C5.156 6 5 6.156 5 6.347v5.552c0 .191.156.347.347.347h2.037c.212 0 .385-.173.385-.385V6.43c0-.237-.193-.43-.431-.43m12.082 7.84c-.492.602-1.22.947-2.001.947h-3.044l-.08 1.264c0 2.228-1.244 2.765-1.778 2.893-.577.137-1.321.028-1.55-.423l-3.05-5.383c-.164.069-.344.108-.533.108H5.347c-.742 0-1.347-.605-1.347-1.347V6.347C4 5.605 4.605 5 5.347 5h1.99c.347 0 .66.128.908.333.238-.204.544-.333.88-.333H16c1.29 0 2.413.914 2.66 2.136l1.289 4.575c.153.756-.04 1.531-.53 2.129" })));
Dislike.displayName = 'Dislike';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const DropToAttach = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props, { viewBox: "0 0 130 130" }),
    React__default["default"].createElement("path", { fill: "#FFF", d: "M65.43 29.094L65.903 39.871 74.377 40.564 60.598 57.243 60.04 46.147 51.452 45.361 64.931 28.57z", transform: "translate(-375 -646) translate(295.5 362) translate(80 284) translate(6.5)" }),
    React__default["default"].createElement("path", { fill: "#075FFF", d: "M64.961 29.412L52.258 44.977l7.018.038c.828 0 1.502.673 1.502 1.501v9.852l12.706-15.537h-7.02c-.829 0-1.503-.673-1.503-1.502v-9.917zM60.78 57.87c-.178 0-.359-.032-.534-.1-.587-.222-.967-.773-.967-1.402v-9.852h-7.034c-.602 0-1.129-.342-1.375-.89-.247-.55-.152-1.17.248-1.62l12.701-15.567c.438-.494 1.09-.652 1.676-.43.587.223.967.774.967 1.403v9.917l7.023.002c.604 0 1.132.342 1.38.893.247.551.152 1.173-.249 1.625L61.92 57.343c-.307.345-.718.527-1.14.527z", transform: "translate(-375 -646) translate(295.5 362) translate(80 284) translate(6.5)" }),
    React__default["default"].createElement("path", { fill: "#FFF", d: "M91.059 29.729L92.616 26.084 97.976 31.805 91.896 33.737 91.517 31.805z", transform: "translate(-375 -646) translate(295.5 362) translate(80 284) translate(6.5)" }),
    React__default["default"].createElement("path", { fill: "#075FFF", d: "M90.539 18.583c1.533-.23 3.08-.148 4.596.242 6.188 1.593 9.927 7.924 8.334 14.113-1.042 4.051-4.203 7.236-8.25 8.313-.938.251-1.907.382-2.88.389-.417 0-.753-.332-.756-.745-.003-.414.33-.752.745-.755.846-.006 1.689-.12 2.506-.338 3.523-.938 6.275-3.712 7.182-7.238.672-2.61.287-5.325-1.083-7.646-1.37-2.321-3.562-3.968-6.172-4.64-1.32-.34-2.666-.41-4.001-.212-.408.065-.791-.221-.852-.631-.061-.409.22-.791.63-.852zm1.831 6.982c.65-.152 1.331.07 1.768.58l3.464 4.047c.38.443.52 1.046.374 1.613-.145.567-.559 1.027-1.107 1.233l-3.982 1.493c-.086.032-.176.048-.263.048-.304 0-.589-.186-.702-.487-.146-.388.05-.82.44-.966l3.981-1.493c.124-.047.167-.146.181-.202.014-.055.025-.163-.06-.263l-3.466-4.046c-.1-.118-.223-.11-.289-.095-.065.015-.179.062-.217.213l-.603 2.34c-.104.402-.512.644-.914.54-.4-.103-.642-.512-.539-.913l.602-2.341c.168-.65.678-1.15 1.332-1.301z", transform: "translate(-375 -646) translate(295.5 362) translate(80 284) translate(6.5)" }),
    React__default["default"].createElement("path", { d: "M70.507 8.38c2.633 0 5.125 1.146 6.838 3.144l8.47 9.883c1.399 1.631 2.169 3.712 2.169 5.861v32.995c0 3.977-3.235 7.211-7.211 7.211H44.96c-3.976 0-7.211-3.234-7.211-7.211V15.591c0-3.976 3.235-7.211 7.21-7.211zm0 1.5H44.96c-3.15 0-5.711 2.562-5.711 5.711v44.672c0 3.149 2.562 5.711 5.71 5.711h35.813c3.149 0 5.71-2.562 5.71-5.711V27.268c0-.242-.013-.483-.036-.722h-10.06c-3.177 0-5.763-2.586-5.763-5.764V9.886c-.04 0-.078-.006-.117-.006zm-45.95-5.234c1.732-.217 3.492.19 4.954 1.187l5.185 3.906c.33.249.397.719.148 1.05-.25.33-.72.396-1.05.148l-5.157-3.885c-.955-.65-2.092-.978-3.246-.964l2.134 7.89c.456 1.688 2.2 2.69 3.888 2.233.397-.11.81.128.92.529.108.4-.13.81-.53.92-.405.11-.814.162-1.217.162-2.057 0-3.947-1.372-4.51-3.452l-2.182-8.071-19.212 5.194c-1.11.3-2.035 1.014-2.608 2.01-.572.997-.722 2.157-.422 3.266l9.117 33.719c.618 2.29 2.987 3.647 5.275 3.03l17.509-4.28c.403-.098.81.148.907.55.099.402-.148.809-.55.907L16.418 54.97c-.5.135-1.003.199-1.5.199-2.548 0-4.9-1.705-5.597-4.29L.204 17.16c-.404-1.495-.202-3.06.57-4.403.77-1.344 2.02-2.307 3.516-2.712l19.283-5.213c.173-.047.348-.078.522-.111.044-.022.083-.053.132-.066.112-.031.223-.03.33-.01zm55.34-.158c.822-3.19 4.085-5.12 7.28-4.298l20.016 5.152c2.103.541 3.858 1.97 4.816 3.92l4.644 9.452c.782 1.59.97 3.412.527 5.128l-6.656 25.854c-.398 1.546-1.374 2.845-2.749 3.658-.932.55-1.973.833-3.029.833-.5 0-1.003-.064-1.5-.192l-11.73-3.22c-.4-.103-.642-.513-.54-.914.105-.4.512-.64.915-.539l11.73 3.22c1.156.297 2.362.128 3.392-.48 1.03-.609 1.761-1.58 2.06-2.74l6.655-25.854c.037-.144.045-.29.071-.437l-7.734-1.99c-1.244-.32-2.288-1.106-2.94-2.21-.654-1.107-.837-2.4-.517-3.644l2.164-8.404-19.97-5.14c-2.39-.617-4.837.828-5.452 3.22l-.966 3.81c-.103.4-.512.643-.913.539-.4-.103-.642-.512-.539-.914zm-7.773 5.567v10.727c0 2.351 1.913 4.264 4.264 4.264h9.752c-.301-.971-.792-1.88-1.463-2.662l-8.471-9.883c-1.07-1.249-2.506-2.099-4.082-2.446zm36.054-2.717l-2.117 8.223c-.22.856-.094 1.745.355 2.506.45.76 1.167 1.3 2.023 1.521l7.446 1.917c-.06-.735-.248-1.459-.578-2.13l-4.644-9.452c-.546-1.11-1.42-2.004-2.485-2.585z", transform: "translate(-375 -646) translate(295.5 362) translate(80 284) translate(6.5)" }),
    React__default["default"].createElement("path", { fill: "#FFF", d: "M24.191 24.91L27.535 37.359 26.365 37.927 21.12 36.082 17.066 36.891 15.453 30.572 19.261 29.247 22.98 24.91z", transform: "translate(-375 -646) translate(295.5 362) translate(80 284) translate(6.5)" }),
    React__default["default"].createElement("path", { fill: "#075FFF", d: "M21.934 24.52c.467-.598 1.216-.876 1.967-.73.724.144 1.292.667 1.48 1.365l3.05 11.279c.189.698-.038 1.436-.592 1.924-.376.332-.846.505-1.324.505-.255 0-.513-.05-.76-.151l-4.436-1.586c-.161-.058-.342-.064-.51-.02l-2.833.768c-1.025.276-2.081-.314-2.353-1.317l-1.364-5.045c-.272-1.008.345-2.056 1.376-2.335l2.826-.764c.167-.045.319-.141.428-.271zm1.676.742c-.072-.014-.323-.043-.497.184l-.021.027-3.055 3.634c-.308.367-.718.627-1.185.754l-2.825.764c-.233.063-.377.285-.32.496l1.364 5.044c.056.205.284.32.514.26l2.833-.766c.204-.055.412-.083.619-.083.267 0 .533.046.787.137l4.469 1.6c.298.123.5-.03.554-.08.074-.065.19-.206.136-.408l-3.05-11.28c-.054-.201-.226-.263-.323-.283zm5.45 1.149c.178-.374.627-.531 1-.352 1.302.624 2.261 1.768 2.632 3.137.37 1.37.117 2.84-.692 4.036-.145.214-.382.33-.622.33-.145 0-.29-.042-.42-.13-.343-.232-.433-.698-.2-1.041.564-.834.742-1.856.486-2.803-.257-.948-.925-1.741-1.833-2.177-.373-.18-.53-.627-.352-1z", transform: "translate(-375 -646) translate(295.5 362) translate(80 284) translate(6.5)" }),
    React__default["default"].createElement("g", null,
        React__default["default"].createElement("text", { transform: "translate(0 84)" },
            React__default["default"].createElement("tspan", { x: ".14", y: "14" }, "Drop to attach file")))));
DropToAttach.displayName = 'DropToAttach';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Dots = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 1c-3.86 0-7 3.14-7 7 0 3.859 3.14 7 7 7 3.859 0 7-3.141 7-7 0-3.86-3.141-7-7-7zm-3 6c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm6 0c.553 0 1 .448 1 1s-.447 1-1 1c-.553 0-1-.448-1-1s.447-1 1-1zm-3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" })));
Dots.displayName = 'Dots';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Dock = (_a) => {
    var { undock } = _a, rest = __rest(_a, ["undock"]);
    return (React__default["default"].createElement(Svg, Object.assign({}, rest), undock ? (React__default["default"].createElement("path", { d: "M11.434 5c.276 0 .5.223.5.5 0 .276-.224.5-.5.5H8.967C7.331 6 6 7.331 6 8.966v6.067C6 16.67 7.331 18 8.967 18h6.066C16.669 18 18 16.67 18 15.033v-2.467c0-.276.224-.5.5-.5s.5.224.5.5v2.467C19 17.22 17.221 19 15.033 19H8.967C6.779 19 5 17.22 5 15.033V8.966C5 6.78 6.779 5 8.967 5zM18.5 5c.066 0 .13.014.19.038.124.05.22.149.272.27.024.063.038.127.038.192v4c0 .277-.224.5-.5.5s-.5-.223-.5-.5V6.707l-6.121 6.122c-.098.097-.226.146-.354.146-.127 0-.255-.05-.353-.146-.195-.196-.195-.512 0-.708L17.292 6H14.5c-.276 0-.5-.223-.5-.5 0-.276.224-.5.5-.5z" })) : (React__default["default"].createElement("path", { d: "M11.434 5c.276 0 .5.223.5.5 0 .276-.224.5-.5.5H8.967C7.331 6 6 7.331 6 8.966v6.067C6 16.67 7.331 18 8.967 18h6.066C16.669 18 18 16.67 18 15.033v-2.467c0-.276.224-.5.5-.5s.5.224.5.5v2.467C19 17.22 17.221 19 15.033 19H8.967C6.779 19 5 17.22 5 15.033V8.966C5 6.78 6.779 5 8.967 5zm6.067 1c.127 0 .255.049.353.146.195.196.195.512 0 .708l-6.121 6.12h2.793c.276 0 .5.224.5.5 0 .277-.224.5-.5.5h-4c-.066 0-.13-.013-.191-.037-.123-.051-.22-.15-.271-.271-.024-.062-.038-.126-.038-.191v-4c0-.277.224-.5.5-.5s.5.223.5.5v2.793l6.12-6.122c.099-.097.227-.146.355-.146z" }))));
};
Dock.displayName = 'Dock';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Document = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M16.042 18H7.959C7.43 18 7 17.57 7 17.042V6.959C7 6.431 7.43 6 7.959 6h5.461v2.131c0 .899.732 1.632 1.632 1.632H17v7.279c0 .528-.43.958-.958.958zm.63-9.293c.014.017.019.038.033.056h-1.653c-.348 0-.632-.284-.632-.632V6.2c.125.074.243.163.34.277l1.912 2.23zm.759-.65L15.52 5.826C15.069 5.301 14.416 5 13.725 5H7.959C6.878 5 6 5.879 6 6.959v10.083C6 18.122 6.878 19 7.959 19h8.083c1.08 0 1.958-.878 1.958-1.958V9.595c0-.564-.202-1.11-.569-1.538z" })));
Document.displayName = 'Document';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Echo = (_a) => {
    var { muted = false, poorConnection = false } = _a, rest = __rest(_a, ["muted", "poorConnection"]);
    return (React__default["default"].createElement(Svg, Object.assign({}, rest), poorConnection ? (muted ? (React__default["default"].createElement("path", { d: "M12.463 18.992l.037 1c-.145.005-.29.008-.438.008-.19-.003-.361-.003-.54-.008l.033-1c.165.006.335.007.505.008.138 0 .271-.003.402-.008zM4.146 4.146c.194-.195.511-.195.707 0l2.228 2.229c-.005-.013-.014-.024-.02-.037l.913.912c-.016-.008-.03-.019-.045-.027l1.447 1.446.026.01 1.23 1.229-.021-.003 5.387 5.388v-.018l.298.297h.014l.537.538-.015.015 3.02 3.021c.195.195.195.512 0 .707-.098.098-.226.147-.354.147-.127 0-.255-.049-.352-.146L17 17.707v.11h-1v-.943h.169l-.09-.088c-.966.532-2.556.786-4.08.786-2.171 0-4.489-.512-4.92-1.622h-.08v-.943h1v.565c0 .256 1.375 1 4 1 1.57 0 2.682-.267 3.332-.535l-6.47-6.47C8 9.313 7.337 8.93 7.101 8.41H7v-.702L4.146 4.854c-.195-.196-.195-.513 0-.708zm5.616 14.647c.278.055.575.101.89.135l-.11.994c-.345-.038-.672-.087-.977-.149zm4.49-.005l.2.98c-.305.063-.632.114-.978.152l-.109-.994c.312-.034.61-.081.886-.138zm-6.05-.568c.17.123.417.243.716.346l-.328.945c-.396-.137-.724-.299-.974-.48zm7.604-.006l.596.803c-.246.184-.575.348-.974.488l-.332-.944c.3-.105.546-.226.71-.348zM8 16.895v.942H7v-.942h1zm0-3.772v.943H7v-.943h1zm9-.019v.943h-.813L16 13.86v-.756h1zm-9-1.866v.943H7v-.943h1zm9-.019v.942h-1v-.942h1zM8 9.352v.943H7v-.943h1zm9-.018v.942h-1v-.942h1zm0-1.886v.942h-.091c-.46 1.066-2.68 1.567-4.796 1.583l-1.03-1.03c.286.021.592.032.917.032 2.625 0 4-.743 4-1v-.527h1zM12 4c2.408 0 5 .626 5 2l-.001.005H17v.5h-.132C16.315 7.527 14.09 8 12 8c-.678 0-1.369-.052-2.014-.153L8.563 6.424C9.194 6.706 10.349 7 12 7c2.625 0 4-.743 4-1s-1.375-1-4-1c-2.372 0-3.712.604-3.95.91l-.702-.702C8.128 4.385 10.117 4 12 4zM9.892 5.648c.514 0 .931.142.931.318 0 .176-.417.317-.93.317-.515 0-.932-.141-.932-.317 0-.176.417-.318.931-.318zm4.328 0c.515 0 .932.142.932.318 0 .176-.417.317-.932.317-.513 0-.93-.141-.93-.317 0-.176.417-.318.93-.318z" })) : (React__default["default"].createElement("path", { d: "M12.46 18.992l.038 1c-.144.005-.29.008-.436.008-.181-.003-.362-.003-.54-.008l.03-1c.167.006.335.007.508.008.136 0 .27-.003.4-.008zm-2.697-.2c.277.056.573.102.887.136l-.109.994c-.345-.038-.673-.088-.979-.15zm4.488-.004l.201.98c-.305.063-.632.114-.978.152l-.109-.994c.312-.034.61-.081.886-.138zm-6.046-.568c.168.122.414.242.714.345l-.328.945c-.397-.137-.725-.299-.974-.48zm7.603-.008l.592.806c-.248.183-.576.346-.973.485l-.332-.942c.3-.105.546-.227.713-.35zM8 16.893v.942H7v-.942h1zm9-.017v.942h-1v-.942h1zm0-1.886v.942h-.071c-.415 1.121-2.744 1.64-4.929 1.64-2.173 0-4.489-.513-4.922-1.622H7v-.943h1v.564c0 .257 1.375 1 4 1s4-.743 4-1v-.58h1zm-9-1.869v.943H7v-.943h1zm9-.016v.942h-1v-.942h1zm-9-1.87v.943H7v-.943h1zm9-.016v.942h-1v-.942h1zM8 9.351v.943H7v-.943h1zm9-.017v.942h-1v-.942h1zm0-1.885v.942h-.092C16.44 9.475 14.149 9.976 12 9.976c-2.139 0-4.417-.495-4.901-1.567H7v-.944h1v.51c0 .258 1.375 1 4 1s4-.742 4-1V7.45h1zM12 4c2.408 0 5 .626 5 2l-.001.005H17v.5h-.132C16.315 7.527 14.09 8 12 8c-2.09 0-4.315-.473-4.868-1.495H7v-.5V6c0-1.374 2.592-2 5-2zm0 1c-2.625 0-4 .743-4 1s1.375 1 4 1 4-.743 4-1-1.375-1-4-1zm-2.107.647c.515 0 .932.143.932.318 0 .176-.417.319-.932.319-.515 0-.932-.143-.932-.319 0-.175.417-.317.932-.317zm4.329 0c.514 0 .93.143.93.318 0 .176-.416.319-.93.319-.515 0-.932-.143-.932-.319 0-.175.417-.317.932-.317z" }))) : muted ? (React__default["default"].createElement("path", { d: "M4.146 4.146c.196-.195.512-.195.708 0l15 15c.195.196.195.512 0 .708-.098.097-.226.146-.354.146-.128 0-.256-.049-.354-.146L17 17.707V18c0 1.374-2.592 2-5 2s-5-.626-5-2V7.707L4.146 4.854c-.195-.196-.195-.512 0-.708zM16 16.825c-.972.505-2.516.747-4 .747-1.479 0-3.025-.237-4-.738V18c0 .257 1.375 1 4 1s4-.743 4-1zM8 9.232v6.34c0 .257 1.375 1 4 1 1.569 0 2.682-.265 3.331-.534L8.86 9.567c-.317-.094-.608-.205-.86-.335zM12 4c2.409 0 5 .626 5 2v8.909l-1-1V9.237c-.96.494-2.474.73-3.934.738L11.03 8.939c.302.022.624.037.97.037 2.625 0 4-.743 4-1v-.714c-.974.5-2.52.738-4 .738-.698 0-1.41-.054-2.072-.163L8.463 6.372C9.063 6.669 10.246 7 12 7c2.625 0 4-.743 4-1s-1.375-1-4-1c-2.46 0-3.806.649-3.967.942L7.62 5.53l-.297-.296C8.088 4.393 10.099 4 12 4zM9.892 5.648c.515 0 .931.142.931.318 0 .176-.416.317-.93.317-.515 0-.932-.141-.932-.317 0-.176.417-.318.931-.318zm4.33 0c.513 0 .93.142.93.318 0 .176-.417.317-.93.317-.515 0-.932-.141-.932-.317 0-.176.417-.318.931-.318z" })) : (React__default["default"].createElement("path", { d: "M12 4c2.408 0 5 .626 5 2v12c0 1.374-2.592 2-5 2s-5-.626-5-2V6c0-1.374 2.592-2 5-2zm4 12.834c-.975.5-2.521.739-4 .739s-3.025-.238-4-.74V18c0 .257 1.375 1 4 1s4-.743 4-1zm0-7.595c-.975.5-2.521.738-4 .738s-3.025-.237-4-.738v6.334c0 .257 1.375 1 4 1s4-.743 4-1zm0-1.977c-.975.5-2.521.738-4 .738s-3.025-.237-4-.738v.715c0 .257 1.375 1 4 1s4-.743 4-1zM12 5c-2.625 0-4 .744-4 1 0 .257 1.375 1 4 1s4-.743 4-1c0-.256-1.375-1-4-1zm-2.108.648c.515 0 .932.143.932.32 0 .173-.417.316-.932.316-.514 0-.931-.143-.931-.317 0-.176.417-.319.93-.319zm4.329 0c.515 0 .932.143.932.32 0 .173-.417.316-.932.316-.514 0-.931-.143-.931-.317 0-.176.417-.319.93-.319z" }))));
};
Echo.displayName = 'Echo';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Eye = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12.006 7c2.627 0 4.897 1.813 6.339 3.334.888.934.888 2.398 0 3.332-1.442 1.52-3.712 3.334-6.34 3.334-2.626 0-4.897-1.813-6.34-3.335-.887-.933-.887-2.396.002-3.331C7.107 8.814 9.379 7 12.006 7zm0 1c-2.392 0-4.544 1.893-5.614 3.023-.512.539-.512 1.415-.001 1.954 1.07 1.13 3.223 3.022 5.615 3.022 2.39 0 4.544-1.893 5.613-3.022.513-.539.513-1.415 0-1.954C16.55 9.893 14.398 8 12.007 8zm0 1c1.653 0 3 1.346 3 3s-1.347 3-3 3c-1.655 0-3-1.346-3-3s1.345-3 3-3zm0 1c-1.104 0-2 .897-2 2s.896 2 2 2c1.102 0 2-.897 2-2s-.898-2-2-2z" })));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const EmojiPicker = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm3 8c0 1.657-1.343 3-3 3s-3-1.343-3-3zm-5-4.267c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm4 0c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z" })));
EmojiPicker.displayName = 'EmojiPicker';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Feedback = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M11.434 5c.276 0 .5.224.5.5 0 .277-.224.5-.5.5H8.967C7.331 6 6 7.33 6 8.968v6.067C6 16.67 7.331 18 8.967 18h6.066C16.669 18 18 16.67 18 15.034v-2.467c0-.276.224-.5.5-.5s.5.224.5.5v2.467C19 17.22 17.221 19 15.033 19H8.967C6.779 19 5 17.22 5 15.034V8.967C5 6.78 6.779 5 8.967 5zm4.305.434c.565-.564 1.468-.58 2.014-.034l.848.848c.258.257.399.604.399.975 0 .386-.158.764-.433 1.04l-4.271 4.27c-.612.612-1.378 1.019-2.217 1.176l-.953.179c-.05.01-.1.014-.151.014-.21 0-.412-.08-.563-.226-.187-.181-.275-.445-.235-.706l.143-.953c.132-.884.558-1.723 1.2-2.365zM16.778 6h-.012c-.12.003-.232.053-.32.14l-.39.39.707.707c.195.195.195.512 0 .707-.098.098-.226.147-.353.147-.128 0-.256-.05-.354-.147l-.707-.707-3.121 3.122c-.492.49-.818 1.132-.92 1.805l-.103.69.69-.128c.64-.12 1.225-.432 1.694-.901l4.27-4.271c.09-.09.14-.21.14-.332 0-.104-.037-.2-.105-.268l-.848-.848c-.07-.07-.164-.106-.268-.106z" })));
Feedback.displayName = 'Feedback';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Hamburger = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zm3.5 8.5c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h7zm-1-2c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-6c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h6zm1-2c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492L8.5 9.5h7z" })));
Hamburger.displayName = 'Hamburger';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledCircle = styled__default["default"].circle `
  fill: ${(props) => props.theme.colors.primary.main};
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const HandRaise = (_a) => {
    var { isRaised } = _a, rest = __rest(_a, ["isRaised"]);
    return (React__default["default"].createElement(Svg, Object.assign({}, rest),
        isRaised && React__default["default"].createElement(StyledCircle, { id: "Circle", cx: "12", cy: "12", r: "10" }),
        React__default["default"].createElement("path", { d: "M6.386 12.04c-.11 0-.218.055-.317.163-.156.17-.05.694.213 1.059l1.804 2.467c.026.038.763 1.175 1.947 1.933.626.399 3.462 1.309 5.433-.303.76-.621 1.161-1.924 1.161-3.772V8.326c0-.388-.233-.728-.5-.728-.27 0-.5.334-.5.728v3.053c0 .276-.223.5-.5.5-.276 0-.5-.224-.5-.5V6.386c0-.343-.228-.632-.5-.632-.27 0-.5.289-.5.632v4.935c0 .277-.223.5-.5.5-.276 0-.5-.223-.5-.5V5.633c0-.343-.228-.633-.5-.633-.275 0-.5.284-.5.633v5.618c0 .276-.223.5-.5.5-.276 0-.5-.224-.5-.5v-4.19c0-.395-.228-.729-.5-.729-.27 0-.5.334-.5.729v6.824c0 .276-.223.5-.5.5-.138 0-.33-.058-.425-.158l-1.356-1.452c-.367-.469-.7-.724-.946-.735h-.014zm6.29 7.251c-1.42 0-2.667-.458-3.182-.787-1.376-.88-2.199-2.157-2.233-2.211L5.474 13.85c-.487-.673-.7-1.714-.142-2.323.303-.33.693-.51 1.11-.486.562.023 1.123.389 1.664 1.086l.521.557V7.061c0-.954.673-1.729 1.5-1.729.18 0 .352.036.511.104.09-.808.724-1.436 1.49-1.436.59 0 1.103.374 1.347.916.197-.104.42-.162.652-.162.827 0 1.5.732 1.5 1.632v.31c.156-.063.325-.098.5-.098.827 0 1.5.775 1.5 1.728v5.261c0 2.188-.514 3.718-1.528 4.547-1.064.869-2.298 1.157-3.424 1.157z", fill: isRaised ? 'white' : '' })));
};
HandRaise.displayName = 'HandRaise';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Information = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm.016 6.476c.276 0 .5.224.5.5v2.498c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-2.498c0-.276.224-.5.5-.5zM12 8.709c.414 0 .75.335.75.75 0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-.415.336-.75.75-.75z" })));
Information.displayName = 'Information';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Laptop = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M19.5 17c.276 0 .5.224.5.5s-.224.5-.5.5h-15c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zM17 6c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2H7c-1.103 0-2-.897-2-2V8c0-1.103.897-2 2-2zm0 1H7c-.552 0-1 .449-1 1v6c0 .551.448 1 1 1h10c.552 0 1-.449 1-1V8c0-.551-.448-1-1-1z" })));
Laptop.displayName = 'Laptop';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const LeaveMeeting = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M14.407 5c2.405 0 4.384 1.91 4.495 4.289l.005.211v5c0 2.405-1.91 4.384-4.29 4.495l-.21.005h-2c-1.372 0-2.647-.625-3.498-1.676-.174-.215-.14-.53.074-.704.215-.173.53-.14.703.074.62.765 1.524 1.24 2.509 1.3l.212.006h2c1.86 0 3.394-1.473 3.494-3.309l.006-.191v-5c0-1.86-1.473-3.395-3.31-3.495L14.408 6h-2c-.936 0-1.817.374-2.472 1.029-.195.195-.512.195-.707 0-.195-.196-.195-.513 0-.708.785-.783 1.825-1.255 2.939-1.315l.24-.006h2zM8.682 8.843c.174.173.193.443.058.637l-.058.07-1.976 1.974h6.658c.276 0 .5.224.5.5 0 .246-.177.45-.41.492l-.09.008H6.707L8.682 14.5c.195.195.195.511 0 .707-.174.173-.443.193-.638.058l-.07-.058-2.828-2.83-.013-.013-.032-.038.045.052c-.027-.027-.05-.056-.07-.087l-.02-.035-.019-.041-.006-.016-.007-.019-.008-.03-.005-.02-.006-.032c-.003-.02-.005-.041-.005-.062v-.022c0-.022.002-.043.005-.064L5 12.024c0-.036.004-.071.01-.105l.013-.045c.004-.015.01-.03.016-.044l.006-.014.01-.023.013-.021.007-.012.013-.02.013-.018.032-.038.013-.013 2.829-2.829c.195-.195.512-.195.707 0z" })));
LeaveMeeting.displayName = 'LeaveMeeting';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Like = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M18.977 12.053l-1.29 4.575C17.528 17.422 16.818 18 16 18H9.126c-.197 0-.357-.158-.357-.352V11.385l3.034-5.353c.123-.044.45-.069.76.105.479.271.732.897.733 1.842l.089 1.43c.02.45.389.803.84.803h3.194c.479 0 .926.211 1.228.58.298.364.415.837.33 1.261M7.337 18h-1.99C5.156 18 5 17.843 5 17.652V12.1c0-.19.156-.347.347-.347h2.037c.212 0 .385.173.385.385v5.431c0 .237-.193.43-.431.43m12.082-7.84c-.492-.602-1.22-.947-2.001-.947h-3.044l-.08-1.264c0-2.228-1.244-2.765-1.778-2.893-.577-.137-1.321-.028-1.55.423l-3.05 5.383c-.164-.069-.344-.108-.533-.108H5.347C4.605 10.753 4 11.358 4 12.1v5.552C4 18.394 4.605 19 5.347 19h1.99c.347 0 .66-.128.908-.333.238.204.544.333.88.333H16c1.29 0 2.413-.914 2.66-2.136l1.289-4.575c.153-.756-.04-1.53-.53-2.129" })));
Like.displayName = 'Like';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ListHandRaise = (_a) => {
    var rest = __rest(_a, []);
    return (React__default["default"].createElement(Svg, Object.assign({}, rest),
        React__default["default"].createElement("path", { d: "M16.06 10.682c1.623 0 2.943 1.32 2.943 2.942v3.434c0 1.622-1.32 2.942-2.942 2.942h-3.34c-1.623 0-2.944-1.32-2.944-2.942v-3.434c0-1.622 1.32-2.942 2.944-2.942zm0 1h-3.34c-1.072 0-1.944.87-1.944 1.942v3.434c0 1.07.873 1.942 1.944 1.942h3.34c1.072 0 1.943-.871 1.943-1.942v-3.434c0-1.071-.872-1.942-1.942-1.942zm-.033 4.863c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-2.13c-.275 0-.5-.224-.5-.5 0-.245.178-.45.411-.492l.09-.008h2.129zm-3.109.146c.1.09.15.22.15.35 0 .07-.01.13-.04.19-.02.07-.06.12-.11.17-.09.09-.22.14-.35.14-.14 0-.26-.05-.35-.14-.05-.05-.09-.1-.11-.17-.03-.06-.04-.12-.04-.19 0-.13.05-.26.15-.35.18-.19.51-.19.7 0zm0-1.7c.1.09.15.221.15.351 0 .13-.05.26-.15.35-.09.1-.22.15-.35.15-.07 0-.13-.01-.19-.04-.07-.02-.12-.06-.16-.11-.1-.09-.15-.22-.15-.35 0-.07.01-.13.04-.19.02-.06.06-.12.11-.16.18-.19.521-.19.7 0zm-2.042-10.99c.485 0 .91.287 1.136.714.151-.064.314-.1.485-.1.68 0 1.24.566 1.304 1.286l.006.137v.123c.1-.029.203-.043.311-.043.68 0 1.24.597 1.304 1.359l.006.144v1.625c0 .276-.223.5-.5.5-.245 0-.45-.177-.492-.41l-.008-.09V7.621c0-.288-.164-.503-.31-.503-.13 0-.275.17-.305.41l-.006.093v1.674c0 .277-.223.5-.5.5-.245 0-.45-.176-.492-.41l-.008-.09V6.038c0-.23-.142-.423-.31-.423-.147 0-.275.148-.305.34l-.006.083V9.25c0 .276-.224.5-.5.5-.245 0-.45-.177-.492-.41l-.008-.09V5.423c0-.229-.142-.423-.31-.423-.147 0-.275.149-.305.34l-.006.083v3.768c0 .276-.224.5-.5.5-.245 0-.45-.177-.492-.41l-.008-.09V6.588c0-.287-.164-.5-.311-.5-.13 0-.274.168-.304.408l-.006.092v5.567c0 .276-.224.5-.5.5-.111 0-.249-.037-.348-.104l-.066-.056-1.1-1.185c-.403-.519-.637-.565-.7-.568-.026.001-.098-.003-.194.101-.07.078-.04.38.116.65l.064.1 1.461 2.012c.002.002.493.657 1.227 1.38.197.192.199.51.006.706-.098.1-.228.15-.357.15-.127 0-.253-.048-.35-.144-.745-.732-1.248-1.388-1.322-1.487l-.009-.012-1.466-2.019c-.426-.592-.599-1.47-.11-2.009.267-.292.609-.456.975-.427.438.018.87.272 1.284.754l.137.168.252.27V6.588c0-.828.588-1.5 1.31-1.5.117 0 .23.016.337.05C9.714 4.488 10.244 4 10.876 4zm4.318 10.84c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-1.296c-.276 0-.5-.224-.5-.5 0-.246.177-.45.41-.492l.09-.008h1.296zm-2.276-1.56c.1.101.15.22.15.36 0 .13-.05.25-.15.35-.09.09-.22.15-.35.15-.14 0-.26-.06-.35-.15-.1-.09-.15-.22-.15-.35 0-.07.01-.14.04-.2.02-.059.06-.11.11-.16.18-.18.521-.18.7 0zm3.294-.143c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-2.314c-.277 0-.5-.224-.5-.5 0-.246.177-.45.41-.492l.09-.008h2.314z" })));
};
ListHandRaise.displayName = 'ListHandRaise';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Lock = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12 5c2.206 0 4 1.696 4 3.78v.924c1.153.356 2 1.418 2 2.687v3.786C18 17.734 16.733 19 15.177 19H8.823C7.267 19 6 17.734 6 16.177V12.39c0-1.27.847-2.331 2-2.687V8.78C8 6.696 9.794 5 12 5zm3.177 5.568H8.823C7.818 10.568 7 11.386 7 12.39v3.786C7 17.182 7.818 18 8.823 18h6.354C16.182 18 17 17.182 17 16.177V12.39c0-1.005-.818-1.823-1.823-1.823zm-3.186 2.831c.276 0 .5.224.5.5v1.066c0 .277-.224.5-.5.5s-.5-.223-.5-.5V13.9c0-.276.224-.5.5-.5zM12 6c-1.654 0-3 1.248-3 2.78v.789h6V8.78C15 7.247 13.654 6 12 6z" })));
Lock.displayName = 'Lock';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Meeting = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12 14c.276 0 .5.224.5.5 0 .277-.224.5-.5.5-1.103 0-2 .897-2 2s.897 2 2 2c.806 0 1.529-.48 1.844-1.221.107-.256.398-.372.655-.266.254.108.373.4.265.655C14.293 19.28 13.208 20 12 20c-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3zm5.504-4.5c.106-.256.398-.375.654-.269 1.12.47 1.842 1.556 1.842 2.77 0 1.653-1.346 3-3 3-1.655 0-3-1.347-3-3 0-.278.223-.5.5-.5.276 0 .5.222.5.5 0 1.102.897 2 2 2 1.102 0 2-.898 2-2 0-.81-.483-1.535-1.229-1.847-.255-.107-.374-.4-.267-.655zM7 9c1.654 0 3 1.346 3 3 0 .276-.224.5-.5.5S9 12.276 9 12c0-1.103-.897-2-2-2s-2 .897-2 2c0 .872.557 1.637 1.385 1.903.262.085.407.367.322.63-.068.212-.265.346-.476.346-.05 0-.102-.007-.153-.024C4.835 14.455 4 13.308 4 12c0-1.654 1.346-3 3-3zm5-5c1.654 0 3 1.346 3 3s-1.346 3-3 3c-.277 0-.5-.224-.5-.5 0-.277.223-.5.5-.5 1.102 0 2-.897 2-2s-.898-2-2-2c-.825 0-1.577.517-1.87 1.287-.099.26-.389.388-.646.29-.258-.1-.387-.389-.288-.647C9.636 4.776 10.763 4 12 4z" })));
Meeting.displayName = 'Meeting';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const SvgWithoutMicrophoneProps = (_a) => {
    var rest = __rest(_a, ["poorConnection", "muted"]);
    return React__default["default"].createElement(Svg, Object.assign({}, rest));
};
const StyledSvg = styled__default["default"](SvgWithoutMicrophoneProps) `
  ${(props) => props.poorConnection ? `color: ${props.theme.colors.error.light}` : ''}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function getPath(muted, poorConnection) {
    if (muted) {
        return poorConnection
            ? 'M4.146 4.146c.196-.195.513-.195.708 0L9.168 8.46h.018l.813.815v.018l5.854 5.854c.002-.005.005-.008.008-.01l.724.724-.008.01 3.276 3.275c.195.195.195.512 0 .707-.098.098-.226.147-.354.147-.127 0-.255-.049-.352-.146l-3.281-3.281C14.82 17.459 13.475 18 11.998 18c-3.308 0-6-2.691-6-6 0-.277.224-.5.5-.5.278 0 .5.223.5.5 0 2.757 2.244 5 5 5 1.2 0 2.29-.436 3.147-1.146l-1.439-1.438c-.14.105-.287.207-.445.285l-.447-.895c.062-.03.116-.073.174-.11l-2.99-2.989v.941H9v-1.063h.88L4.147 4.853c-.196-.194-.196-.511 0-.707zM14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm3-7.5c.276 0 .5.224.5.5 0 1.106-.307 2.14-.83 3.031l-.748-.748c.357-.687.578-1.456.578-2.283 0-.276.224-.5.5-.5zm-6.293 2.317c.25.121.517.183.793.183l.016 1.001-.098-.008c-.359-.012-.76-.089-1.147-.275zm-1.085-1.278c.093.282.234.536.42.757l-.766.644c-.267-.319-.47-.685-.603-1.089zM15 11.618v.155c0 .325-.051.643-.139.95l-.867-.868c.001-.027.006-.055.006-.082v-.155h1zm0-2.126v1.062h-1V9.492h1zm0-2.125v1.062h-1V7.367h1zM9.155 6.201l.955.297c-.073.235-.11.48-.11.73v.17h-.463l-.512-.512c.024-.232.061-.463.13-.685zm5.079-1.128c.268.321.469.689.599 1.093l-.951.307c-.091-.283-.231-.537-.415-.759zm-3.514-.765l.453.891c-.246.126-.474.312-.656.535l-.776-.63c.274-.338.603-.604.979-.796zM12 4c.434 0 .853.098 1.245.29l-.44.897C12.553 5.064 12.282 5 12 5l-.031-1z'
            : 'M14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zM4.146 4.146c.196-.195.512-.195.708 0l15 15c.195.196.195.512 0 .708-.098.097-.226.146-.354.146-.128 0-.256-.049-.354-.146l-3.282-3.283C14.819 17.458 13.475 18 12 18c-3.309 0-6-2.691-6-6 0-.276.224-.5.5-.5s.5.224.5.5c0 2.757 2.243 5 5 5 1.199 0 2.288-.437 3.146-1.146l-1.452-1.453c-.483.366-1.058.599-1.694.599-1.654 0-3-1.448-3-3.228V9.707L4.146 4.854c-.195-.196-.195-.512 0-.708zM17.5 11.5c.276 0 .5.224.5.5 0 1.112-.31 2.152-.84 3.046l-.747-.746c.362-.693.587-1.467.587-2.3 0-.276.224-.5.5-.5zm-7.5-.793v1.065c0 1.229.897 2.228 2 2.228.362 0 .7-.111.992-.301L10 10.707zm2-6.708c1.654 0 3 1.45 3 3.228v4.546c0 .337-.062.655-.151.962l-.859-.858.01-.104V7.228C14 5.998 13.103 5 12 5s-2 .998-2 2.228v.658l-.971-.97C9.178 5.284 10.445 3.998 12 3.998z';
    }
    return poorConnection
        ? 'M14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5zm3-7.5c.276 0 .5.224.5.5 0 3.309-2.691 6-6 6s-6-2.691-6-6c0-.276.224-.5.5-.5s.5.224.5.5c0 2.757 2.243 5 5 5s5-2.243 5-5c0-.276.224-.5.5-.5zm-6.293 2.318c.25.12.517.183.793.183l.013.958v-.46l.085.492H12.014c-.486-.002-.876-.096-1.242-.274l.435-.9zm2.268-.543l.77.637c-.275.335-.606.6-.983.79l-.447-.896c.25-.125.473-.303.66-.53zm-3.353-.736c.093.283.235.537.42.757l-.765.645c-.268-.32-.472-.687-.604-1.09l.949-.312zM15 11.619v.155c0 .359-.053.71-.16 1.043l-.953-.305c.075-.233.113-.482.113-.738v-.155h1zm-5-1.033v1.063H9v-1.063h1zm5-1.093v1.063h-1V9.492h1zm-5-1.03v1.062H9V8.46h1zm5-1.095V8.43h-1V7.367h1zM9.156 6.2l.955.3c-.074.232-.111.478-.111.728v.17H9v-.17c0-.351.053-.696.156-1.027zm5.08-1.127c.267.32.468.688.598 1.093l-.951.306c-.091-.282-.23-.537-.415-.759l.768-.64zm-3.516-.766l.453.891c-.246.126-.473.311-.656.535l-.775-.63c.273-.337.602-.603.978-.795zM12 4c.433 0 .852.098 1.245.29l-.44.899C12.55 5.064 12.28 5 12 5l-.031-1h.03z'
        : 'M14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm3-7.5c.276 0 .5.224.5.5 0 3.309-2.691 6-6 6s-6-2.691-6-6c0-.276.224-.5.5-.5s.5.224.5.5c0 2.757 2.243 5 5 5s5-2.243 5-5c0-.276.224-.5.5-.5zM12 4c1.654 0 3 1.448 3 3.227v4.546C15 13.552 13.654 15 12 15s-3-1.448-3-3.227V7.227C9 5.447 10.346 4 12 4zm0 1c-1.103 0-2 .999-2 2.227v4.546C10 13 10.897 14 12 14s2-1 2-2.227V7.227C14 5.999 13.103 5 12 5z';
}
const Microphone = (_a) => {
    var { muted = false, poorConnection = false, mutedTitle = 'Muted microphone', unmutedTitle = 'Microphone' } = _a, rest = __rest(_a, ["muted", "poorConnection", "mutedTitle", "unmutedTitle"]);
    const iconPath = getPath(muted, poorConnection);
    return (React__default["default"].createElement(StyledSvg, Object.assign({}, rest, { muted: muted, poorConnection: poorConnection, title: muted ? mutedTitle : unmutedTitle, "data-testid": poorConnection ? 'poor-connection-mic' : 'good-connection-mic' }),
        React__default["default"].createElement("path", { d: iconPath })));
};
Microphone.displayName = 'Microphone';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Pause = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm-2 3.663c.827 0 1.5.673 1.5 1.5v3.673c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5v-3.673c0-.827.673-1.5 1.5-1.5zm4 0c.827 0 1.5.673 1.5 1.5v3.673c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5v-3.673c0-.827.673-1.5 1.5-1.5zm-4 1c-.275 0-.5.225-.5.5v3.673c0 .275.225.5.5.5s.5-.225.5-.5v-3.673c0-.275-.225-.5-.5-.5zm4 0c-.275 0-.5.225-.5.5v3.673c0 .275.225.5.5.5s.5-.225.5-.5v-3.673c0-.275-.225-.5-.5-.5z" })));
Pause.displayName = 'Pause';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Pin = (_a) => {
    var { unpin } = _a, rest = __rest(_a, ["unpin"]);
    return (React__default["default"].createElement(Svg, Object.assign({}, rest), unpin ? (React__default["default"].createElement("path", { d: "M4.147 4.146c.195-.195.51-.195.707 0L14.707 14l.979.979 4.168 4.167c.195.196.195.512 0 .708-.098.097-.226.146-.354.146-.128 0-.256-.049-.353-.146L14.293 15h-1.791v3.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5V15H8.474c-.583 0-1.096-.324-1.337-.845-.236-.507-.156-1.089.206-1.518l.977-1.157c.425-.47.58-1.151.604-1.849L4.147 4.854c-.196-.196-.196-.512 0-.708zM14.046 5c.01 0 .02.005.03.005.505.018.969.266 1.246.681.28.418.332.942.14 1.405 0 .005-1.024 3.009.212 4.376l.988 1.17c.363.428.442 1.01.206 1.518-.061.134-.141.253-.234.357l-.712-.71c.02-.028.032-.053.039-.067.034-.073.097-.264-.062-.452l-.978-1.157c-1.623-1.796-.444-5.244-.392-5.39.074-.183.056-.353-.038-.494-.103-.154-.272-.242-.464-.242H9.979c-.193 0-.362.088-.465.242-.094.141-.111.311-.047.468.018.05.133.388.244.88L8.446 6.324c.03-.223.106-.442.237-.638.287-.43.77-.686 1.296-.686zm-4.223 5.53c-.117.587-.337 1.151-.75 1.608l-.966 1.144c-.16.188-.097.379-.063.452.028.062.146.266.43.266h4.819z" })) : (React__default["default"].createElement("path", { d: "M15.959 13.734c-.028.062-.146.266-.431.266H8.472c-.285 0-.402-.204-.431-.266-.033-.073-.096-.264.064-.452l.965-1.144c1.634-1.809.455-5.257.394-5.429-.065-.156-.047-.326.047-.467.103-.154.272-.242.465-.242h4.048c.193 0 .362.088.465.242.094.141.112.311.037.493-.051.146-1.23 3.594.393 5.39l.978 1.157c.159.187.096.38.062.452m.7-1.098l-.987-1.169c-1.236-1.368-.212-4.372-.212-4.376.19-.462.14-.987-.14-1.404-.278-.417-.741-.665-1.246-.682-.011 0-.02-.005-.03-.005H9.976c-.525 0-1.01.256-1.296.687-.28.417-.331.942-.15 1.378.293.838.828 3.263-.213 4.415l-.976 1.156c-.363.43-.443 1.012-.206 1.52.24.52.754.844 1.337.844H11.5v3.5c0 .276.224.5.5.5s.5-.224.5-.5V15h3.028c.583 0 1.096-.325 1.338-.845.236-.508.156-1.09-.206-1.519" }))));
};
Pin.displayName = 'Pin';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Phone = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M11.999 10.19c.738 0 3.194.089 3.792 1.241.08.158.117.315.138.418l.228 1.112c.033.167.116.318.239.438l.423.414c.349.341.919.343 1.27 0l.649-.635c.308-.3.347-.777.09-1.107-.776-1.005-2.696-2.698-6.83-2.771-4.132.073-6.052 1.766-6.828 2.77-.257.331-.218.808.09 1.108l.649.635c.349.341.919.343 1.27 0L7.6 13.4c.124-.121.207-.272.24-.438l.228-1.116c.02-.1.058-.257.137-.412.599-1.155 3.055-1.244 3.793-1.244m5.455 4.877c-.483 0-.966-.18-1.334-.539l-.422-.413c-.266-.26-.447-.59-.521-.953l-.23-1.115c-.008-.047-.022-.113-.046-.158-.145-.28-1.17-.699-2.902-.699-1.732 0-2.757.419-2.903.702-.023.042-.037.108-.046.152l-.23 1.119c-.073.362-.254.692-.521.953l-.421.412c-.736.719-1.932.719-2.668 0l-.65-.635c-.67-.656-.75-1.703-.181-2.435.887-1.146 3.056-3.08 7.61-3.158h.019c4.555.078 6.724 2.012 7.61 3.159.569.731.49 1.778-.181 2.434l-.65.635c-.367.359-.85.539-1.333.539" })));
Phone.displayName = 'Phone';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Play = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm-1.342 3.803c.402-.211.89-.181 1.265.083l3.02 2.113c.325.229.52.603.52 1 0 .4-.195.774-.52 1.002l-3.02 2.114c-.21.147-.455.22-.7.22-.194 0-.387-.045-.565-.137-.406-.211-.658-.627-.658-1.084V9.887c0-.457.252-.873.658-1.084zm.565.86c-.043 0-.08.014-.103.027-.045.023-.12.08-.12.197v4.227c0 .117.075.173.12.197.044.024.135.05.228-.015l3.02-2.113c.082-.058.095-.14.095-.183 0-.043-.013-.125-.095-.182l-3.02-2.114c-.043-.03-.086-.041-.125-.041z" })));
Play.displayName = 'Play';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Presenter = (props) => {
    return (React__default["default"].createElement(Svg, Object.assign({}, props),
        React__default["default"].createElement("path", { d: "M12.966 10c1.662 0 3.013 1.343 3.034 3h.731c.425 0 .82.216 1.055.579.248.379.287.855.103 1.272l-1.237 3.804c-.069.211-.265.345-.476.345-.05 0-.103-.008-.155-.024-.263-.086-.405-.369-.32-.631l1.255-3.85c.064-.154.055-.274-.007-.37-.03-.047-.1-.125-.218-.125H7.276c-.118 0-.187.078-.218.125-.062.096-.07.216-.024.323l1.272 3.897c.085.262-.057.545-.32.631-.052.016-.104.024-.155.024-.21 0-.406-.134-.476-.345L6.1 14.804c-.166-.37-.127-.846.121-1.225.237-.363.63-.579 1.055-.579h.732c.02-1.657 1.372-3 3.034-3zm0 1h-1.924c-1.112 0-2.018.894-2.038 2h6c-.02-1.106-.927-2-2.038-2zm-.87-6c1.104 0 2 .897 2 2s-.896 2-2 2c-1.102 0-2-.897-2-2s.898-2 2-2zm0 1c-.551 0-1 .449-1 1 0 .551.449 1 1 1 .553 0 1-.449 1-1 0-.551-.447-1-1-1z" })));
};
Presenter.displayName = 'Presenter';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Record = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M17.073 7C18.136 7 19 7.864 19 8.926v7.021c0 1.062-.864 1.926-1.927 1.926H6.926C5.864 17.873 5 17.01 5 15.947v-7.02C5 7.863 5.864 7 6.926 7zm0 1H6.926C6.415 8 6 8.415 6 8.926v7.021c0 .511.415.926.926.926h10.147c.511 0 .927-.415.927-.926v-7.02c0-.512-.416-.927-.927-.927zm-2.533 2.367c1.142 0 2.07.929 2.07 2.07 0 1.14-.928 2.069-2.07 2.069H9.459c-1.141 0-2.069-.93-2.069-2.07 0-1.14.928-2.07 2.069-2.07 1.142 0 2.07.93 2.07 2.07 0 .393-.116.757-.306 1.07h1.554c-.19-.313-.306-.677-.306-1.07 0-1.14.928-2.07 2.069-2.07zm0 1c-.59 0-1.069.48-1.069 1.07 0 .59.479 1.069 1.069 1.069s1.07-.48 1.07-1.07c0-.59-.48-1.07-1.07-1.07zm-5.081 0c-.59 0-1.069.48-1.069 1.07 0 .59.479 1.069 1.069 1.069s1.07-.48 1.07-1.07c0-.59-.48-1.07-1.07-1.07z" })));
Record.displayName = 'Record';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Remove = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M14.5 5C16.981 5 19 7.019 19 9.5v5c0 2.481-2.019 4.5-4.5 4.5h-5C7.019 19 5 16.981 5 14.5v-5C5 7.019 7.019 5 9.5 5zm0 1h-5C7.57 6 6 7.57 6 9.5v5C6 16.43 7.57 18 9.5 18h5c1.93 0 3.5-1.57 3.5-3.5v-5C18 7.57 16.43 6 14.5 6zM9.172 9.17c.195-.194.511-.194.707 0L12 11.293l2.121-2.121c.195-.195.512-.195.707 0 .195.195.195.512 0 .707L12.708 12l2.12 2.12c.195.197.195.513 0 .708-.098.098-.226.147-.354.147-.127 0-.255-.05-.353-.147l-2.12-2.121-2.122 2.12c-.098.099-.226.148-.354.148-.128 0-.256-.05-.353-.147-.196-.195-.196-.511 0-.707L11.293 12l-2.12-2.122c-.197-.195-.197-.512 0-.707z" })));
Remove.displayName = 'Remove';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Rooms = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props, { title: "Rooms" }),
    React__default["default"].createElement("path", { d: "M15.962 6.99C17.637 6.99 19 8.353 19 10.028v3.623c0 1.675-1.363 3.038-3.038 3.038h-2.1c-1.356 0-3.433.663-4.537 1.448l-.994.706c-.146.103-.316.156-.487.156-.133 0-.266-.03-.389-.095-.28-.145-.455-.432-.455-.748v-8.128C7 8.353 8.363 6.99 10.038 6.99h5.924zm0 1h-5.924C8.914 7.99 8 8.904 8 10.028v7.824l.746-.529c1.266-.9 3.561-1.634 5.115-1.634h2.101c1.124 0 2.038-.914 2.038-2.038v-3.623c0-1.124-.914-2.038-2.038-2.038zM13.243 5c.277 0 .5.224.5.5s-.223.5-.5.5H8.497C7.12 6 6 7.12 6 8.497v6.627c0 .276-.224.5-.5.5s-.5-.224-.5-.5V8.497C5 6.568 6.568 5 8.497 5h4.746z" })));
Rooms.displayName = 'Rooms';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Search = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M11 16c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5m7.852 2.145l-3.294-3.253C16.455 13.843 17 12.485 17 11c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6c1.464 0 2.807-.528 3.849-1.403l3.299 3.258c.098.097.225.145.352.145.129 0 .258-.05.355-.148.195-.197.193-.514-.003-.707" })));
Search.displayName = 'Search';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Share = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M15.239 15.197c.778-.778 2.047-.779 2.829.003.78.781.781 2.05.002 2.828-.389.39-.9.584-1.412.584-.462 0-.92-.168-1.293-.486-.02.014-.033.033-.055.045-1.027.551-2.16.833-3.303.833-.592 0-1.187-.075-1.771-.227-.268-.07-.428-.343-.357-.61.069-.266.34-.429.609-.358 1.452.377 2.975.197 4.299-.498-.266-.71-.118-1.543.452-2.114zM5.747 9.866l.09.014c.268.07.428.343.357.61-.373 1.434-.202 2.924.468 4.235.213-.077.44-.123.673-.123.537 0 1.038.208 1.417.586.78.781.781 2.05.002 2.83-.377.376-.877.584-1.411.584-.537 0-1.04-.21-1.417-.588-.378-.378-.587-.88-.587-1.414 0-.486.178-.94.493-1.303C5 13.74 4.78 11.953 5.228 10.238c.069-.266.34-.426.609-.358zm10.904 5.747c-.256 0-.511.097-.705.291-.389.39-.388 1.024.003 1.415.391.39 1.025.39 1.414.002.389-.389.388-1.023-.002-1.414-.196-.196-.453-.294-.71-.294zm-9.314-.01c-.268 0-.518.102-.707.29-.188.188-.292.44-.29.706 0 .267.104.52.293.708.19.19.44.294.708.295.268 0 .518-.104.706-.292.39-.39.388-1.024-.003-1.415-.189-.189-.44-.293-.708-.293zm7.807-9.594c.777-.778 2.047-.779 2.828.002.72.72.77 1.847.165 2.631.862 1.572 1.09 3.388.637 5.125-.059.225-.26.374-.483.374-.042 0-.084-.005-.126-.016-.268-.07-.428-.343-.358-.61.374-1.435.191-2.929-.484-4.242-.242.1-.5.15-.76.15-.514 0-1.026-.195-1.417-.586-.78-.78-.78-2.049-.002-2.828zm-6.49-.144c1.568-.86 3.363-1.092 5.111-.636.268.07.428.343.358.61-.07.267-.34.427-.61.358-1.442-.377-2.926-.207-4.234.463.104.244.161.509.162.783 0 .534-.207 1.037-.585 1.414-.39.389-.9.584-1.412.584-.513 0-1.026-.196-1.417-.586-.78-.781-.78-2.05-.002-2.83.377-.375.878-.583 1.411-.583.45 0 .87.154 1.218.423zm-1.216.577c-.268 0-.518.104-.706.29-.389.39-.388 1.025.002 1.416.392.39 1.025.39 1.415.002.188-.188.292-.44.292-.706 0-.244-.098-.47-.257-.651-.014-.017-.033-.024-.045-.043-.005-.008-.005-.017-.01-.025-.187-.18-.43-.283-.69-.283zm9.118-.017c-.256 0-.51.097-.705.291-.389.39-.388 1.023.002 1.414.393.392 1.026.392 1.415.002.39-.389.388-1.023-.003-1.414-.195-.195-.453-.293-.709-.293z" })));
Share.displayName = 'Share';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const SignalStrength = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M17.366 5c.772 0 1.4.629 1.4 1.4v11.2c0 .772-.628 1.4-1.4 1.4h-1.2c-.772 0-1.4-.628-1.4-1.4V6.4c0-.771.628-1.4 1.4-1.4zm-5 4c.772 0 1.4.629 1.4 1.4v7.2c0 .772-.628 1.4-1.4 1.4h-1.2c-.772 0-1.4-.628-1.4-1.4v-7.2c0-.771.628-1.4 1.4-1.4zM7.6 13c.772 0 1.4.629 1.4 1.4v3.2c0 .772-.628 1.4-1.4 1.4H6.4c-.772 0-1.4-.628-1.4-1.4v-3.2c0-.771.628-1.4 1.4-1.4zm9.766-7h-1.2c-.22 0-.4.18-.4.4v11.2c0 .22.18.4.4.4h1.2c.22 0 .4-.18.4-.4V6.4c0-.22-.18-.4-.4-.4zm-5 4h-1.2c-.22 0-.4.18-.4.4v7.2c0 .22.18.4.4.4h1.2c.22 0 .4-.18.4-.4v-7.2c0-.22-.18-.4-.4-.4zM7.6 14H6.4c-.22 0-.4.18-.4.4v3.2c0 .22.18.4.4.4h1.2c.22 0 .4-.18.4-.4v-3.2c0-.22-.18-.4-.4-.4z" })));
SignalStrength.displayName = 'SignalStrength';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Sound = (_a) => {
    var { disabled } = _a, rest = __rest(_a, ["disabled"]);
    return (React__default["default"].createElement(Svg, Object.assign({}, rest), disabled ? (React__default["default"].createElement("path", { d: "M10.939 7.261c.393-.297.914-.344 1.361-.124.431.213.7.638.7 1.11v7.506c0 .472-.269.897-.7 1.11-.187.092-.385.137-.582.137-.28 0-.557-.09-.788-.268l-2.486-1.728c-.087-.06-.193-.093-.302-.093H6.256C5.563 14.911 5 14.36 5 13.682v-3.358c0-.68.566-1.235 1.263-1.235h1.88c.108 0 .213-.032.298-.092zm.918.772c-.042-.019-.182-.077-.32.03l-.018.012-2.505 1.741c-.253.178-.555.273-.871.273h-1.88c-.145 0-.263.105-.263.235v3.358c0 .127.115.23.256.23h1.886c.316 0 .618.093.874.272l2.503 1.741c.159.12.297.062.338.042.053-.027.143-.089.143-.214V8.247c0-.125-.09-.187-.143-.214zM14.9 10.13c.195-.195.512-.195.707 0l1.163 1.163 1.163-1.163c.195-.195.512-.195.707 0 .195.195.195.512 0 .707L17.477 12l1.163 1.163c.195.195.195.512 0 .707-.098.098-.226.147-.352.147-.128 0-.256-.049-.355-.147l-1.163-1.163-1.162 1.163c-.099.098-.226.147-.354.147-.128 0-.255-.049-.354-.147-.194-.195-.194-.512 0-.707L16.064 12 14.9 10.837c-.194-.195-.194-.512 0-.707z" })) : (React__default["default"].createElement("path", { d: "M10.939 7.26c.397-.295.914-.343 1.361-.123.431.213.7.638.7 1.11v7.506c0 .473-.269.898-.7 1.111-.187.092-.386.137-.582.137-.28 0-.557-.091-.788-.269l-2.486-1.727c-.088-.061-.194-.094-.302-.094H6.256c-.693 0-1.256-.552-1.256-1.229v-3.357c0-.681.566-1.236 1.263-1.236h1.88c.108 0 .214-.033.3-.092zm5.148.054c.176-.211.49-.241.704-.065 1.406 1.164 2.213 2.896 2.213 4.751 0 1.855-.807 3.588-2.213 4.752-.094.077-.207.115-.319.115-.144 0-.286-.061-.385-.18-.177-.213-.147-.529.065-.705 1.177-.974 1.852-2.425 1.852-3.982 0-1.556-.675-3.007-1.852-3.981-.212-.176-.242-.492-.065-.705zm-4.23.719c-.041-.02-.183-.077-.32.029l-.018.013-2.505 1.742c-.255.178-.556.272-.871.272h-1.88c-.145 0-.263.106-.263.236v3.357c0 .127.115.229.256.229h1.886c.315 0 .617.095.874.274l2.503 1.741c.157.117.298.062.337.042.054-.027.144-.09.144-.215V8.247c0-.125-.09-.187-.143-.214zm2.841 1.62c.181-.21.496-.232.705-.053.707.608 1.112 1.483 1.112 2.4 0 .917-.405 1.793-1.112 2.402-.095.08-.21.12-.326.12-.14 0-.28-.058-.379-.173-.18-.21-.156-.524.053-.705.486-.42.764-1.018.764-1.644 0-.625-.278-1.223-.764-1.642-.209-.181-.233-.496-.053-.705z" }))));
};
Sound.displayName = 'Sound';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Spinner = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }),
    React__default["default"].createElement("g", { fill: "none", fillRule: "evenodd" },
        React__default["default"].createElement("path", { d: "M0 0H24V24H0z" }),
        React__default["default"].createElement("g", { fill: "currentColor" },
            React__default["default"].createElement("path", { d: "M8 0c.316 0 .571.256.571.571V4c0 .316-.255.571-.571.571-.316 0-.571-.255-.571-.571V.571C7.429.256 7.684 0 8 0z", transform: "translate(4 4)" }),
            React__default["default"].createElement("path", { d: "M14.928 4c.158.273.064.623-.209.78l-2.97 1.715c-.272.158-.622.064-.78-.21-.158-.273-.064-.622.21-.78l2.969-1.714c.273-.158.622-.064.78.209z", opacity: ".2", transform: "translate(4 4)" }),
            React__default["default"].createElement("path", { d: "M12 1.072c.273.158.367.507.21.78l-1.715 2.97c-.158.273-.507.367-.78.209-.274-.158-.368-.508-.21-.78l1.714-2.97c.158-.273.508-.367.781-.21z", opacity: ".12", transform: "translate(4 4)" }),
            React__default["default"].createElement("path", { d: "M16 8c0 .316-.256.571-.571.571H12c-.316 0-.571-.255-.571-.571 0-.316.255-.571.571-.571h3.429c.315 0 .571.255.571.571z", opacity: ".28", transform: "translate(4 4)" }),
            React__default["default"].createElement("path", { d: "M12 14.928c-.273.158-.623.064-.78-.209l-1.715-2.97c-.158-.272-.064-.622.21-.78.273-.158.622-.064.78.21l1.714 2.969c.158.273.064.622-.209.78z", opacity: ".44", transform: "translate(4 4)" }),
            React__default["default"].createElement("path", { d: "M14.928 12c-.158.273-.507.367-.78.21l-2.97-1.715c-.273-.158-.367-.507-.209-.78.158-.274.508-.368.78-.21l2.97 1.714c.273.158.367.508.21.781z", opacity: ".36", transform: "translate(4 4)" }),
            React__default["default"].createElement("path", { d: "M8 16c-.316 0-.571-.256-.571-.571V12c0-.316.255-.571.571-.571.316 0 .571.255.571.571v3.429c0 .315-.255.571-.571.571z", opacity: ".52", transform: "translate(4 4)" }),
            React__default["default"].createElement("path", { d: "M1.072 12c-.158-.273-.064-.623.209-.78l2.97-1.715c.272-.158.622-.064.78.21.158.273.064.622-.21.78l-2.969 1.714c-.273.158-.622.064-.78-.209z", opacity: ".68", transform: "translate(4 4)" }),
            React__default["default"].createElement("path", { d: "M4 14.928c-.273-.158-.367-.507-.21-.78l1.715-2.97c.158-.273.507-.367.78-.209.274.158.368.508.21.78L4.78 14.72c-.158.273-.508.367-.781.21z", opacity: ".6", transform: "translate(4 4)" }),
            React__default["default"].createElement("path", { d: "M0 8c0-.316.256-.571.571-.571H4c.316 0 .571.255.571.571 0 .316-.255.571-.571.571H.571C.256 8.571 0 8.316 0 8z", opacity: ".76", transform: "translate(4 4)" }),
            React__default["default"].createElement("path", { d: "M4 1.072c.273-.158.623-.064.78.209l1.715 2.97c.158.272.064.622-.21.78-.273.158-.622.064-.78-.21L3.791 1.853c-.158-.273-.064-.622.209-.78z", opacity: ".92", transform: "translate(4 4)" }),
            React__default["default"].createElement("path", { d: "M1.072 4c.158-.273.507-.367.78-.21l2.97 1.715c.273.158.367.507.209.78-.158.274-.508.368-.78.21L1.28 4.78c-.273-.158-.367-.508-.21-.781z", opacity: ".84", transform: "translate(4 4)" })))));
Spinner.displayName = 'Spinner';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const UpAndDownCaret = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("path", { d: "M8.824 9.88c-.21.18-.526.154-.705-.056-.159-.187-.156-.457-.006-.64l.063-.065 3.523-3c.165-.14.397-.156.577-.05l.074.052 3.477 3c.209.18.232.497.052.706-.16.185-.428.224-.632.104l-.074-.052-3.151-2.72-3.198 2.722zM15.176 14.12c.21-.18.526-.154.705.056.159.187.157.457.006.64l-.063.065-3.523 3c-.165.14-.397.156-.577.05l-.074-.052-3.477-3c-.209-.18-.232-.497-.052-.706.16-.185.428-.224.632-.104l.074.052 3.151 2.72 3.198-2.722z" })));
UpAndDownCaret.displayName = 'UpAndDownCaret';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ZoomIn = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("g", { fill: "none", fillRule: "evenodd" },
        React__default["default"].createElement("g", null,
            React__default["default"].createElement("path", { d: "M0 0H24V24H0z" }),
            React__default["default"].createElement("path", { fill: "currentColor", d: "M11 5c3.309 0 6 2.691 6 6 0 1.485-.545 2.843-1.442 3.892l3.294 3.253c.196.193.198.51.003.707-.097.098-.226.148-.355.148-.127 0-.254-.048-.352-.145l-3.299-3.258C13.807 16.472 12.464 17 11 17c-3.309 0-6-2.691-6-6s2.691-6 6-6zm0 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c.276 0 .5.224.5.5v2h2c.276 0 .5.224.5.5s-.224.5-.5.5h-2v2c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-2h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2v-2c0-.276.224-.5.5-.5z" })))));
ZoomIn.displayName = 'ZoomIn';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ZoomOut = (props) => (React__default["default"].createElement(Svg, Object.assign({}, props),
    React__default["default"].createElement("g", { fill: "none", fillRule: "evenodd" },
        React__default["default"].createElement("g", null,
            React__default["default"].createElement("path", { d: "M0 0H24V24H0z" }),
            React__default["default"].createElement("path", { fill: "currentColor", d: "M11 5c3.309 0 6 2.691 6 6 0 1.485-.545 2.843-1.442 3.892l3.294 3.253c.196.193.198.51.003.707-.097.098-.226.148-.355.148-.127 0-.254-.048-.352-.145l-3.299-3.258C13.807 16.472 12.464 17 11 17c-3.309 0-6-2.691-6-6s2.691-6 6-6zm0 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm2.5 4.5c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5z" })))));
ZoomOut.displayName = 'ZoomOut';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const HiddenCheckbox = styled__default["default"].input `
  ${visuallyHidden};

  &[aria-invalid='true'] + .ch-checkbox {
    border: ${(props) => props.theme.inputs.error.border};
    box-shadow: ${(props) => props.theme.inputs.error.shadow};
  }
`;
const StyledCheckbox = styled__default["default"].div `
  background-color: ${(props) => props.theme.inputs.bgd};
  border: ${(props) => props.theme.inputs.border};
  border-radius: ${(props) => props.theme.radii.default};
  box-shadow: ${(props) => props.theme.inputs.shadow};
  color: ${(props) => props.theme.inputs.fontColor};
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;
  transition: box-shadow 0.05s ease-in;

  > svg {
    left: -0.03125rem;
    position: absolute;
    transform: scale(1.5);
  }

  ${HiddenCheckbox}:checked ~ & {
    background-color: ${(props) => props.theme.inputs.checked.bgd};
    border: ${(props) => props.theme.inputs.checked.border};
    box-shadow: ${(props) => props.theme.inputs.checked.shadow};
    color: ${(props) => props.theme.inputs.checked.fontColor};
  }

  ${HiddenCheckbox}:focus ~ & {
    border: ${(props) => props.theme.inputs.focus.border};
    box-shadow: ${(props) => props.theme.inputs.focus.shadow};
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Checkbox = (props) => {
    const { checked, onChange, value } = props;
    const checkboxNode = React.useRef(null);
    const handleChange = () => {
        var _a, _b;
        (_a = checkboxNode.current) === null || _a === void 0 ? void 0 : _a.click(); // simulate click the native checkbox
        (_b = checkboxNode.current) === null || _b === void 0 ? void 0 : _b.focus();
    };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(HiddenCheckbox, Object.assign({}, props, { "data-testid": "hidden-checkbox", ref: checkboxNode, type: "checkbox", value: value, onChange: onChange })),
        React__default["default"].createElement(StyledCheckbox, { "data-testid": "styled-checkbox", checked: checked, className: "ch-checkbox", onClick: handleChange }, checked && React__default["default"].createElement(Check, { "data-testid": "check" }))));
};
Checkbox.displayName = 'Checkbox';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ControlBarContext = React.createContext({
    showLabels: false,
    layout: 'top',
});
const useControlBarContext = () => {
    return React.useContext(ControlBarContext);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const layoutMap$2 = {
    'undocked-vertical': 'flex-direction: column;',
    'undocked-horizontal': 'flex-direction: row;',
    top: 'flex-direction: row; width: 100%; top: 0; position: fixed;',
    bottom: 'flex-direction: row; width: 100%; bottom: 0; position: fixed;',
    right: 'flex-direction: column; height: 100%; right: 0; position: fixed;',
    left: 'flex-direction: column; height: 100%; left: 0; position: fixed;',
};
const gridTemplateColumnMap = {
    popOver: 'grid-template-columns: 2.5rem minmax(0.5rem, auto);',
    'popOver&vertical': 'grid-template-columns: 1.5rem 1.5rem 1.5rem',
};
const isVertical = (layout) => {
    return (layout === 'right' || layout === 'left' || layout === 'undocked-vertical');
};
const isUndocked = (layout) => {
    return layout === 'undocked-vertical' || layout === 'undocked-horizontal';
};
const unsetPosition = {
    top: 'unset;',
    bottom: 'unset;',
    right: 'unset;',
    left: 'unset;',
};
const responsiveStyles$1 = (props) => {
    return styled.css `
    ${({ theme }) => theme.mediaQueries.max.sm} {
      ${unsetPosition}
      ${(props) => isVertical(props.layout) ? layoutMap$2['left'] : layoutMap$2['bottom']};
      box-shadow: ${(props) => props.theme.controlBar.shadow};
      border: none;
      height: ${(props) => isVertical(props.layout) && '100%'};
      width: ${(props) => !isVertical(props.layout) && '100%'};
    }

    ${({ theme }) => theme.mediaQueries.max.xs} {
      justify-content: ${(props) => isVertical(props.layout) ? 'center' : 'space-around'};
      ${unsetPosition}
      ${(props) => isVertical(props.layout) ? layoutMap$2['left'] : layoutMap$2['bottom']};
      box-shadow: ${({ theme }) => theme.controlBar.shadow};
      border: none;
    }
  `;
};
const StyledControlBar = styled__default["default"].div `
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme, layout }) => isUndocked(layout) ? theme.radii.default : '0'};
  background-color: ${(props) => props.theme.controlBar.bgd};
  opacity: ${(props) => props.theme.controlBar.opacity};
  border: ${({ theme, layout }) => isUndocked(layout) ? 'none' : theme.controlBar.border};
  box-shadow: ${({ theme, layout }) => isUndocked(layout) ? theme.controlBar.shadow : 'none'};
  ${({ layout }) => layoutMap$2[`${layout}`]};

  ${(props) => props.responsive && responsiveStyles$1()}

  width: ${({ layout }) => isVertical(layout) && '5rem'};
  height: ${({ layout }) => !isVertical(layout) && '5rem'};

  ${baseSpacing}
  ${baseStyles}
`;
const StyledControlBarItem = styled__default["default"].div `
  margin: ${({ layout }) => (isVertical(layout) ? '0.625rem 0' : '0 0.625rem')};
  display: grid;
  grid-template-rows: ${({ showLabels }) => showLabels ? '1.5rem 1rem' : '1.5rem'};
  justify-items: center;
  align-items: center;
  ${({ popOver, layout, children }) => `
    ${(!isVertical(layout) &&
    (popOver || children) &&
    gridTemplateColumnMap['popOver']) ||
    ''}
    ${(isVertical(layout) &&
    (popOver || children) &&
    gridTemplateColumnMap['popOver&vertical']) ||
    ''}
  `};

  > :first-child {
    grid-column-start: ${({ layout, popOver, children }) => isVertical(layout) && (popOver || children) ? '2' : '1'};
  }

  .ch-control-bar-item-iconButton {
    .ch-icon {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
    }
  }

  .ch-control-bar-item-caret {
    width: 1.25rem;
    height: 1.25rem;
    padding: 0;

    .ch-icon {
      width: 100%;
      height: 100%;
    }

    // setting this transform on the shape so we
    // don't overwrite the rotate transform on the Caret
    .Svg g {
      transform: scale(1.333);
      transform-origin: 50% 50%;
    }
  }

  .ch-control-bar-popover {
    background-color: inherit;
    grid-column-start: ${({ layout, popOver, children }) => isVertical(layout) && (popOver || children) ? '2' : '1'};
    color: ${({ theme }) => theme.controlBar.text};

    .isOpen.ch-control-bar-item-caret {
      color: ${(props) => props.theme.colors.primary.main};
    }
  }

  .ch-control-bar-item-label {
    color: ${({ theme }) => theme.controlBar.text};
    grid-row-start: 2;
    font-size: ${(props) => props.theme.fontSizes.footnote
    .fontSize}; /* TODO: get updated font size from design */
    padding-top: 0.25rem;
    justify-self: center;
    grid-column: ${({ layout, popOver, children }) => isVertical(layout) && (popOver || children) ? '2' : '1'};
  }

  ${({ theme }) => theme.mediaQueries.max.sm} {
    justify-content: space-around;
    button ~ span {
      display: none;
    }
  }

  ${({ theme }) => theme.mediaQueries.max.xs} {
    margin: ${({ layout }) => (isVertical(layout) ? '0.75rem 0' : '0')};
    button ~ span {
      display: none;
    }
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ControlBar = (_a) => {
    var { tag, layout, showLabels = false, responsive = true, className, children } = _a, rest = __rest(_a, ["tag", "layout", "showLabels", "responsive", "className", "children"]);
    const controlBarContext = { layout, showLabels };
    return (React__default["default"].createElement(ControlBarContext.Provider, { value: controlBarContext },
        React__default["default"].createElement(StyledControlBar, Object.assign({ className: className || '', responsive: responsive, as: tag }, controlBarContext, { "data-testid": "control-bar" }, rest), children)));
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var ManagerReferenceNodeContext = React__namespace.createContext();
var ManagerReferenceNodeSetterContext = React__namespace.createContext();
function Manager(_ref) {
  var children = _ref.children;

  var _React$useState = React__namespace.useState(null),
      referenceNode = _React$useState[0],
      setReferenceNode = _React$useState[1];

  var hasUnmounted = React__namespace.useRef(false);
  React__namespace.useEffect(function () {
    return function () {
      hasUnmounted.current = true;
    };
  }, []);
  var handleSetReferenceNode = React__namespace.useCallback(function (node) {
    if (!hasUnmounted.current) {
      setReferenceNode(node);
    }
  }, []);
  return /*#__PURE__*/React__namespace.createElement(ManagerReferenceNodeContext.Provider, {
    value: referenceNode
  }, /*#__PURE__*/React__namespace.createElement(ManagerReferenceNodeSetterContext.Provider, {
    value: handleSetReferenceNode
  }, children));
}

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === 'function') {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};
/**
 * Simple ponyfill for Object.fromEntries
 */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? React__namespace.useLayoutEffect : React__namespace.useEffect;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

var EMPTY_MODIFIERS$1 = [];
var usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = React__namespace.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS$1
  };

  var _React$useState = React__namespace.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var updateStateModifier = React__namespace.useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        ReactDOM__namespace.flushSync(function () {
          setState({
            styles: fromEntries(elements.map(function (element) {
              return [element, state.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function (element) {
              return [element, state.attributes[element]];
            }))
          });
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = React__namespace.useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false
      }])
    };

    if (reactFastCompare(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React__namespace.useRef();
  useIsomorphicLayoutEffect(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

var NOOP = function NOOP() {
  return void 0;
};

var NOOP_PROMISE = function NOOP_PROMISE() {
  return Promise.resolve(null);
};

var EMPTY_MODIFIERS = [];
function Popper(_ref) {
  var _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy,
      _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS : _ref$modifiers,
      referenceElement = _ref.referenceElement,
      onFirstUpdate = _ref.onFirstUpdate,
      innerRef = _ref.innerRef,
      children = _ref.children;
  var referenceNode = React__namespace.useContext(ManagerReferenceNodeContext);

  var _React$useState = React__namespace.useState(null),
      popperElement = _React$useState[0],
      setPopperElement = _React$useState[1];

  var _React$useState2 = React__namespace.useState(null),
      arrowElement = _React$useState2[0],
      setArrowElement = _React$useState2[1];

  React__namespace.useEffect(function () {
    setRef(innerRef, popperElement);
  }, [innerRef, popperElement]);
  var options = React__namespace.useMemo(function () {
    return {
      placement: placement,
      strategy: strategy,
      onFirstUpdate: onFirstUpdate,
      modifiers: [].concat(modifiers, [{
        name: 'arrow',
        enabled: arrowElement != null,
        options: {
          element: arrowElement
        }
      }])
    };
  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);

  var _usePopper = usePopper(referenceElement || referenceNode, popperElement, options),
      state = _usePopper.state,
      styles = _usePopper.styles,
      forceUpdate = _usePopper.forceUpdate,
      update = _usePopper.update;

  var childrenProps = React__namespace.useMemo(function () {
    return {
      ref: setPopperElement,
      style: styles.popper,
      placement: state ? state.placement : placement,
      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: styles.arrow,
        ref: setArrowElement
      },
      forceUpdate: forceUpdate || NOOP,
      update: update || NOOP_PROMISE
    };
  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
  return unwrapArray(children)(childrenProps);
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

function Reference(_ref) {
  var children = _ref.children,
      innerRef = _ref.innerRef;
  var setReferenceNode = React__namespace.useContext(ManagerReferenceNodeSetterContext);
  var refHandler = React__namespace.useCallback(function (node) {
    setRef(innerRef, node);
    safeInvoke(setReferenceNode, node);
  }, [innerRef, setReferenceNode]); // ran on unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps

  React__namespace.useEffect(function () {
    return function () {
      return setRef(innerRef, null);
    };
  }, []);
  React__namespace.useEffect(function () {
    warning_1(Boolean(setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
  }, [setReferenceNode]);
  return unwrapArray(children)({
    ref: refHandler
  });
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const KEY_CODES = {
    TAB: 9,
    ENTER: 13,
    ESCAPE: 27,
    ARROW_UP: 38,
    ARROW_DOWN: 40,
};
const VIDEO_INPUT_QUALITY = {
    '360p': '360p (nHD) @ 15 fps (600 Kbps max)',
    '540p': '540p (qHD) @ 15 fps (1.4 Mbps max)',
    '720p': '720p (HD) @ 15 fps (1.4 Mbps max)',
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useClickOutside(ref, onClickOutside) {
    const isOutside = (e) => {
        return !!ref.current && !ref.current.contains(e.target);
    };
    const onMouseDown = (e) => {
        if (isOutside(e) && onClickOutside) {
            onClickOutside(e);
        }
    };
    React.useEffect(() => {
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('touchstart', onMouseDown);
        return () => {
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('touchstart', onMouseDown);
        };
    });
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useTabOutside(ref, onTabOutside) {
    const isOutside = () => {
        return (!!ref.current &&
            !ref.current.contains(document.activeElement));
    };
    const keyUp = (e) => {
        if (e.keyCode === 9 && isOutside()) {
            return onTabOutside(e);
        }
    };
    React.useEffect(() => {
        document.addEventListener('keyup', keyUp);
        return () => {
            document.removeEventListener('keyup', keyUp);
        };
    });
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledPopOverMenu = styled__default["default"].ul `
  width: fit-content;
  max-width: 22rem;
  background-color: ${(props) => props.theme.popOver.menuBgd};
  border: ${(props) => props.theme.popOver.menuBorder};
  margin: 0;
  border-radius: 0.25rem;
  backdrop-filter: blur(1rem);
  list-style: none;
  padding: 0.5rem 0;
  box-shadow: ${(props) => props.theme.popOver.shadow};
  z-index: ${(props) => props.theme.zIndex.popOver};
  display: table;
  overflow: inherit;
`;
const StyledPopOverToggle = styled__default["default"].button `
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;
const StyledPopOverItem = styled__default["default"].li `
  height: 2rem;
  position: relative;

  button,
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.popOver.itemBgd};
    color: ${(props) => props.theme.popOver.itemText};
    line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
    font-size: ${(props) => props.theme.fontSizes.text.fontSize};
    padding: 0 2.5rem;
    text-decoration: none;
    outline: 0;

    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.popOver.active.itemBgd};
      color: ${(props) => props.theme.popOver.active.itemText};
      outline: 0;
    }

    &:disabled {
      color: ${(props) => props.theme.popOver.disabled};
    }
  }

  a {
    width: unset;
  }

  .ch-content > * {
    ${ellipsis};
  }

  .ch-check {
    position: absolute;
    left: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    top: 0.33rem;
  }

  &:hover .ch-check g,
  &:focus .ch-check g {
    fill: ${(props) => props.theme.popOver.active.itemText};
  }
`;
const StyledSubMenu = styled__default["default"](StyledPopOverItem) `
  > span {
    width: 100%;
    height: 100%;
    display: block;
    height: 2rem;
  }

  > button {
    position: relative;
  }

  .ch-caret {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    right: 0;
    color: inherit;
    fill: inherit;
  }
`;
const StyledPopOverHeader = styled__default["default"].header `
  border-bottom: 0.0625rem solid ${(props) => props.theme.popOver.separator};
  margin-bottom: 0.75rem;
  max-width: 22rem;

  img {
    width: 100%;
    display: inline-block;
    margin-top: -0.5rem;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  img + .ch-title {
    margin-top: 0.75rem;
  }

  .ch-title {
    ${ellipsis};
    padding: 0 2.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: ${(props) => props.theme.popOver.titleText};
    font-size: 1.18125rem;
    line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
  }

  .ch-subtitle {
    ${ellipsis};
    padding: 0 2.5rem;
    color: #616672;
    font-size: ${(props) => props.theme.fontSizes.text.fontSize};
    line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
    line-height: 1.43;
    margin: 0 0 1rem;
  }
`;
const StyledPopOverSeparator = styled__default["default"].li `
  margin: 0;
  border-width: 0.0625rem 0 0 0;
  border-style: solid;
  border-color: ${(props) => props.theme.popOver.separator};
  margin-bottom: 0.75rem;
  opacity: 0.8;
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const getFocusableElements = (node) => {
    return node.querySelectorAll('button, [href]');
};
const PopOver = (_a) => {
    var { renderButton, renderButtonWrapper, onPopOverClick, children, isSubMenu = false, placement = 'bottom-start', a11yLabel, className, closeOnClick = true } = _a, rest = __rest(_a, ["renderButton", "renderButtonWrapper", "onPopOverClick", "children", "isSubMenu", "placement", "a11yLabel", "className", "closeOnClick"]);
    const menuRef = React.createRef();
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        if (isOpen && !!menuRef.current) {
            const nodes = getFocusableElements(menuRef.current);
            !!nodes && nodes[0].focus();
        }
    }, [isOpen]);
    const move = (direction) => {
        const node = menuRef.current;
        if (isSubMenu) {
            // the parent menu can access
            // child nodes and manage focused elements
            return;
        }
        if (node) {
            const nodes = getFocusableElements(node);
            const currentElement = document.activeElement;
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i] === currentElement) {
                    if (direction === 'down' && i !== nodes.length - 1) {
                        return nodes[i + 1].focus();
                    }
                    if (direction === 'up' && i > 0) {
                        return nodes[i - 1].focus();
                    }
                    break;
                }
            }
        }
    };
    const closePopover = (e) => {
        if (!closeOnClick) {
            return;
        }
        const isSubMenuButton = e.target.closest("[data-menu='submenu']");
        return !isSubMenuButton ? setIsOpen(false) : false;
    };
    const handleKeyUp = (e) => {
        switch (e.keyCode) {
            case KEY_CODES.ESCAPE:
                return setIsOpen(false);
            case KEY_CODES.ARROW_UP:
                return move('up');
            case KEY_CODES.ARROW_DOWN:
                return move('down');
        }
    };
    const handlePopOverClick = () => {
        setIsOpen(!isOpen);
        if (onPopOverClick) {
            onPopOverClick(isOpen);
        }
    };
    useClickOutside(menuRef, () => setIsOpen(false));
    useTabOutside(menuRef, () => setIsOpen(false));
    return (React__default["default"].createElement("span", { ref: menuRef, onKeyDown: handleKeyUp, "data-testid": "popover" },
        React__default["default"].createElement(Manager, null,
            React__default["default"].createElement(Reference, null, ({ ref }) => {
                const props = {
                    ref,
                    className: classnames(className, 'ch-popover-toggle'),
                    onClick: handlePopOverClick,
                    'data-menu': isSubMenu ? 'submenu' : null,
                    'aria-label': a11yLabel,
                    'aria-haspopup': true,
                    'aria-expanded': isOpen,
                    'data-testid': 'popover-toggle',
                };
                if (renderButton) {
                    return (React__default["default"].createElement(StyledPopOverToggle, Object.assign({}, props), renderButton(isOpen)));
                }
                if (renderButtonWrapper) {
                    const { ref } = props, rest = __rest(props, ["ref"]);
                    return React__default["default"].createElement("span", { ref: ref }, renderButtonWrapper(isOpen, rest));
                }
                return null;
            }),
            isOpen && (React__default["default"].createElement(Popper, Object.assign({ placement: placement, modifiers: [{ name: 'offset', options: { offset: [-8, 0] } }] }, rest), ({ ref, style, placement }) => (React__default["default"].createElement(StyledPopOverMenu, { "data-placement": placement, onClick: (e) => closePopover(e), ref: ref, style: style, "data-testid": "menu", className: "ch-popover-menu" }, children)))))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const PopOverItem = (_a) => {
    var { as = 'button', children, checked, testId = 'popover-item' } = _a, rest = __rest(_a, ["as", "children", "checked", "testId"]);
    const Tag = as;
    return (React__default["default"].createElement(StyledPopOverItem, { "data-testid": testId },
        checked && React__default["default"].createElement(Check, { className: "ch-check", "data-testid": "popover-check" }),
        React__default["default"].createElement(Tag, Object.assign({ className: "ch-content" }, rest), children)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const consoleLogger = new amazonChimeSdkJs.ConsoleLogger('ChimeSDKReactComponent', amazonChimeSdkJs.LogLevel.INFO);
const LoggerContext = React__default["default"].createContext(consoleLogger);
const LoggerProvider = ({ logger, children, }) => {
    return (React__default["default"].createElement(LoggerContext.Provider, { value: logger }, children));
};
const useLogger = () => {
    const logger = React.useContext(LoggerContext);
    return logger;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// All units are in rem
const caretSpacing = 0.25;
const caretSize = 0.5;
const sidePadding = 0.5;
const verticalPadding = 0.75;
const fontSize = 1;
const TopProps = styled.css `
  top: calc(
    ${(props) => { var _a, _b; return (_b = (_a = props.bounds) === null || _a === void 0 ? void 0 : _a.top) !== null && _b !== void 0 ? _b : 0; }}px -
      ${caretSize + caretSpacing + fontSize}rem
  );
  left: ${(props) => { var _a, _b, _c, _d; return (((_b = (_a = props.bounds) === null || _a === void 0 ? void 0 : _a.left) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = props.bounds) === null || _c === void 0 ? void 0 : _c.right) !== null && _d !== void 0 ? _d : 0)) / 2; }}px;
  transform: translateX(-50%) translateY(-50%);

  &::before {
    transform: rotateZ(180deg);
    top: 100%;
    left: calc(50% - ${caretSize}rem);
  }
`;
const BottomProps = styled.css `
  top: calc(
    ${(props) => { var _a, _b; return (_b = (_a = props.bounds) === null || _a === void 0 ? void 0 : _a.bottom) !== null && _b !== void 0 ? _b : 0; }}px +
      ${caretSize + caretSpacing + fontSize}rem
  );
  left: ${(props) => { var _a, _b, _c, _d; return (((_b = (_a = props.bounds) === null || _a === void 0 ? void 0 : _a.left) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = props.bounds) === null || _c === void 0 ? void 0 : _c.right) !== null && _d !== void 0 ? _d : 0)) / 2; }}px;
  transform: translateX(-50%) translateY(-50%);

  &::before {
    transform: rotateZ(0deg);
    top: -${caretSize}rem;
    left: calc(50% - ${caretSize}rem);
  }
`;
const LeftProps = styled.css `
  top: ${(props) => { var _a, _b, _c, _d; return (((_b = (_a = props.bounds) === null || _a === void 0 ? void 0 : _a.top) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = props.bounds) === null || _c === void 0 ? void 0 : _c.bottom) !== null && _d !== void 0 ? _d : 0)) / 2; }}px;
  left: calc(
    ${(props) => { var _a, _b; return (_b = (_a = props.bounds) === null || _a === void 0 ? void 0 : _a.left) !== null && _b !== void 0 ? _b : 0; }}px - ${caretSize + caretSpacing}rem
  );
  transform: translateY(-50%) translateX(-100%);

  &::before {
    transform: rotateZ(90deg);
    top: calc(50% - ${caretSize / 2}rem);
    left: calc(100% - ${caretSpacing}rem);
  }
`;
const RightProps = styled.css `
  top: ${(props) => { var _a, _b, _c, _d; return (((_b = (_a = props.bounds) === null || _a === void 0 ? void 0 : _a.top) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = props.bounds) === null || _c === void 0 ? void 0 : _c.bottom) !== null && _d !== void 0 ? _d : 0)) / 2; }}px;
  left: calc(
    ${(props) => { var _a, _b; return (_b = (_a = props.bounds) === null || _a === void 0 ? void 0 : _a.right) !== null && _b !== void 0 ? _b : 0; }}px + ${caretSize + caretSpacing}rem
  );
  transform: translateY(-50%);

  &::before {
    transform: rotateZ(270deg);
    top: calc(50% - ${caretSize / 2}rem);
    left: -${caretSize + caretSpacing}rem;
  }
`;
const StyledTooltip = styled__default["default"].span `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  position: fixed;
  z-index: 9999;
  color: white;
  white-space: nowrap;
  pointer-events: none;
  line-height: normal;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: ${fontSize / 2}rem;
  font-size: ${fontSize}rem;
  font-weight: 300;
  padding: ${sidePadding}rem ${verticalPadding}rem;
  white-space: nowrap;
  animation: fadeIn 0.3s;

  &::before {
    border-bottom: ${caretSize}rem solid rgba(0, 0, 0, 0.8);
    border-left: ${caretSize}rem solid transparent;
    border-right: ${caretSize}rem solid transparent;
    content: '';
    height: 0;
    transform: translateX(-100%) translateY(-50%);
    width: 0;
    z-index: 1;
    position: absolute;
  }

  ${(props) => props.position === 'top' && TopProps}
  ${(props) => props.position === 'bottom' && BottomProps}
  ${(props) => props.position === 'left' && LeftProps}
  ${(props) => props.position === 'right' && RightProps}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const initialState$3 = { show: false, bounds: null };
const WithTooltip = (Component, container_id) => (props) => {
    var _a;
    const logger = useLogger();
    const [{ show, bounds }, setShow] = React.useState(initialState$3);
    const [container, setContainer] = React.useState(null);
    const position = (_a = props.tooltipPosition) !== null && _a !== void 0 ? _a : 'top';
    const showToolTip = React.useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        let component = e.target;
        while (!component.getAttribute('data-tooltip'))
            component = component.parentElement;
        const bounds = component.getBoundingClientRect();
        setShow({ show: true, bounds });
    }, []);
    const hideToolTip = React.useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setShow(initialState$3);
    }, []);
    React.useEffect(() => {
        document.addEventListener('scroll', hideToolTip, true);
        return () => document.removeEventListener('scroll', hideToolTip, true);
    }, []);
    React.useEffect(() => {
        const container = document.getElementById(container_id || 'Tooltip__container');
        if (!container) {
            logger.warn(`Attempted to use 'WithTooltip' but could not find container element.Pass a valid element ID or add 'Tooltip__container' ID to existing element`);
            return;
        }
        setContainer(container);
    }, [container_id]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        show &&
            bounds &&
            container &&
            ReactDOM__default["default"].createPortal(React__default["default"].createElement(StyledTooltip, { position: position, bounds: bounds }, props.tooltipContent || props.label), container),
        React__default["default"].createElement(Component, Object.assign({}, props, { "data-tooltip": true, "data-tooltip-position": position, onClick: (e) => {
                var _a;
                if (show)
                    hideToolTip(e);
                (_a = props === null || props === void 0 ? void 0 : props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }, onFocus: (e) => {
                var _a;
                if (!show)
                    showToolTip(e);
                (_a = props === null || props === void 0 ? void 0 : props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }, onBlur: (e) => {
                var _a;
                if (show)
                    hideToolTip(e);
                (_a = props === null || props === void 0 ? void 0 : props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }, onMouseEnter: (e) => {
                var _a;
                if (!show)
                    showToolTip(e);
                (_a = props === null || props === void 0 ? void 0 : props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }, onMouseLeave: (e) => {
                var _a;
                if (show)
                    hideToolTip(e);
                (_a = props === null || props === void 0 ? void 0 : props.onMouseLeave) === null || _a === void 0 ? void 0 : _a.call(props, e);
            } }))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ControlBarButton = (_a) => {
    var { icon, onClick, label, isSelected = false, popOver = null, popOverPlacement, popOverLabel, tooltipContainerId, tooltipContent, children } = _a, rest = __rest(_a, ["icon", "onClick", "label", "isSelected", "popOver", "popOverPlacement", "popOverLabel", "tooltipContainerId", "tooltipContent", "children"]);
    const context = useControlBarContext();
    const IconButtonWithToolTip = React.useMemo(() => WithTooltip(IconButton, tooltipContainerId), [tooltipContainerId]);
    const ButtonComponent = rest['data-tooltip']
        ? IconButtonWithToolTip
        : IconButton;
    const buttonComponentProps = rest['data-tooltip-position']
        ? { tooltipPosition: rest['data-tooltip-position'], tooltipContent }
        : {};
    const renderPopOver = () => (React__default["default"].createElement(PopOver, { renderButtonWrapper: (isActive, props) => (React__default["default"].createElement(IconButton, Object.assign({}, props, { icon: React__default["default"].createElement(Caret, { direction: isVertical(context.layout) ? 'right' : 'up', "data-testid": "control-bar-item-caret" }), label: popOverLabel || label, selected: isActive, className: `ch-control-bar-item-caret ${isActive ? 'isOpen' : ''}` }))), a11yLabel: label, className: "ch-control-bar-popover", placement: popOverPlacement }, popOver === null || popOver === void 0 ? void 0 :
        popOver.map((option, index) => (React__default["default"].createElement(PopOverItem, Object.assign({}, option, { key: index })))),
        children));
    return (React__default["default"].createElement(StyledControlBarItem, Object.assign({ isSelected: isSelected, "data-testid": "control-bar-item" }, rest, context, { popOver: popOver }),
        React__default["default"].createElement(ButtonComponent, Object.assign({}, buttonComponentProps, { onClick: onClick, label: label, icon: icon, className: "ch-control-bar-item-iconButton", selected: isSelected })),
        (popOver || children) && renderPopOver(),
        context.showLabels && (React__default["default"].createElement("div", { className: "ch-control-bar-item-label" }, label))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const fillSpace = styled.css `
  display: flex;
  width: 100%;
  height: 100%;
`;
const fillSpaceCentered = styled.css `
  ${fillSpace};
  align-items: center;
  justify-content: center;
`;
const equalColumns = styled.css `
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: stretch;

  > * {
    flex-grow: 1;
    flex-basis: 50%;
  }
`;
const stack$1 = styled.css `
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    width: 100%;
  }
`;
const layoutMap$1 = {
    'fill-space': fillSpace,
    'fill-space-centered': fillSpaceCentered,
    'equal-columns': equalColumns,
    stack: stack$1,
};
const StyledFlex = styled__default["default"].div `
  align-items: ${(props) => props.alignItems};
  display: ${(props) => (props.container ? 'flex' : 'block')};
  flex: ${(props) => props.flex || ''};
  flex-basis: ${(props) => props.flexBasis};
  flex-direction: ${(props) => props.flexDirection};
  flex-grow: ${(props) => props.flexGrow || ''};
  flex-shrink: ${(props) => props.flexShrink};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};

  // layout variants
  ${(props) => !!props.layout && layoutMap$1[props.layout]}

  ${baseSpacing}
  ${baseStyles}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Flex = (_a) => {
    var { children, className, tag, alignItems = 'stretch', container = false, flexBasis = 'auto', flexDirection = 'row', flexShrink = 1, flexWrap = 'nowrap', justifyContent = 'flex-start' } = _a, props = __rest(_a, ["children", "className", "tag", "alignItems", "container", "flexBasis", "flexDirection", "flexShrink", "flexWrap", "justifyContent"]);
    return (React__default["default"].createElement(StyledFlex, Object.assign({ alignItems: alignItems, container: container, flexBasis: flexBasis, flexDirection: flexDirection, flexShrink: flexShrink, flexWrap: flexWrap, justifyContent: justifyContent, as: tag, "data-testid": "flex", className: className || '' }, props), children));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// ensure that this never changes on re-render by
// omitting a function to update state
function useUniqueId() {
    const [uniqueId] = React.useState(() => uuid.v4());
    return uniqueId;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledLabel = styled__default["default"].label `
  color: ${(props) => props.theme.inputs.fontColor};
  font-size: ${(props) => props.theme.fontSizes.label.fontSize};
  line-height: ${(props) => props.theme.fontSizes.label.lineHeight};

  ${baseSpacing}
  ${baseStyles}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Label = React.forwardRef((props, ref) => {
    const { className, tag } = props, rest = __rest(props, ["className", "tag"]);
    return (React__default["default"].createElement(StyledLabel, Object.assign({ as: tag, "data-testid": "label", className: className || '' }, rest), props.children));
});

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const stack = styled.css `
  &.ch-form-field-input,
  &.ch-form-field-select,
  &.ch-form-field-textarea {
    display: flex;
    flex-direction: column;

    label {
      display: block;
      margin-bottom: 0.5rem;
    }

    input,
    select {
      width: 100%;
    }
  }

  &.ch-form-field-checkbox {
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    grid-template-rows: auto;
    gap: 0px 0.5rem;

    .ch-checkbox {
      grid-column: 1;
      grid-row: 1;
    }

    .ch-checkbox-label {
      line-height: 1.3;
      grid-column: 2;
    }

    .ch-help-text {
      grid-row: 2;
      grid-column: 1/3;
    }
  }

  &.ch-form-field-radiogroup {
    flex-direction: column;

    .ch-radio-wrapper {
      display: block;
      margin-bottom: 0.5rem;
      padding-left: 0.125rem;
      display: grid;
      grid-template-columns: 1.5rem 1fr;
      grid-template-rows: auto;

      align-items: center;
    }

    .ch-radio-label {
      margin-left: 1rem;
      position: relative;
      bottom: -0.5px;
    }
  }
`;
const horizontal = styled.css `
  @media (max-width: 599px) {
    ${stack};
  }

  @media (min-width: 600px) {
    &.ch-form-field-input,
    &.ch-form-field-select,
    &.ch-form-field-textarea,
    &.ch-form-field-checkbox {
      display: grid;
      grid-template-columns: 30% 1fr;
      grid-template-rows: auto;
      gap: 0px 0.5rem;
      align-items: center;

      input {
        width: 100%;
      }

      .ch-help-text {
        grid-column: 2;
      }
    }

    &.ch-form-field-radiogroup {
      flex-wrap: wrap;

      fieldset {
        width: 100%;
      }

      .ch-radio-wrapper {
        display: grid;
        grid-template-columns: 30% 1fr;
        grid-template-rows: auto;
        gap: 0px 0.5rem;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .ch-radio {
        grid-column: 2;
        grid-row: 1;
        margin-top: -4px;
      }

      .ch-radio-label {
        grid-column: 1;
        padding-right: 1rem;
        margin-left: 0;
      }

      .ch-help-text {
        width: 100%;
      }
    }
  }
`;
const inputOnly = styled.css `
  &.ch-form-field-input,
  &.ch-form-field-select,
  &.ch-form-field-textarea {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
    }
  }

  &.ch-form-field-checkbox {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .ch-checkbox {
      order: 1;
    }

    .ch-checkbox-label {
      order: 2;
      padding-left: 1rem;
    }

    .ch-help-text {
      width: 100%;
      order: 3;
    }
  }

  &.ch-form-field-radiogroup {
    flex-direction: column;

    .ch-radio-wrapper {
      display: block;
      margin-bottom: 0.5rem;
    }

    .ch-radio-label {
      margin-left: 1rem;
    }
  }
`;
const layoutMap = {
    stack,
    horizontal,
    'input-only': inputOnly,
};
const StyledFormField = styled__default["default"].div `
  display: flex;
  margin-bottom: 1rem;
  position: relative;

  fieldset {
    margin: 0;
    border: none;
    padding: 0;
  }

  .ch-help-text {
    font-size: ${(props) => props.theme.fontSizes.small.fontSize};
    margin-top: 0.5rem;
    color: ${(props) => props.error
    ? props.theme.inputs.error.fontColor
    : props.theme.inputs.fontColor};
  }

  legend {
    font-size: ${(props) => props.theme.fontSizes.text.fontSize};
    color: ${(props) => props.theme.inputs.fontColor};
    margin-bottom: 0.5rem;
  }

  ${(props) => !!props.layout && layoutMap[props.layout]}

  ${baseSpacing}
  ${baseStyles}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const FormField = React.forwardRef((props, ref) => {
    var _a;
    const { field: Field, label, layout = 'stack', errorText, fieldProps, infoText, error, onChange, value, checked, options, className } = props, rest = __rest(props, ["field", "label", "layout", "errorText", "fieldProps", "infoText", "error", "onChange", "value", "checked", "options", "className"]);
    const displayName = ((_a = Field.displayName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
    const labelId = useUniqueId();
    const descriptionId = useUniqueId();
    const helpText = (error && errorText) || infoText;
    const renderLabel = () => {
        if (layout === 'input-only' && displayName !== 'checkbox') {
            return null;
        }
        if (displayName !== 'radiogroup') {
            return (React__default["default"].createElement(Label, { htmlFor: labelId, className: `ch-${displayName}-label` }, label));
        }
        return false;
    };
    return (React__default["default"].createElement(StyledFormField, Object.assign({ layout: layout, error: error, className: `ch-form-field-${displayName} ${className || ''}`, "data-testid": "form-field" }, rest),
        renderLabel(),
        displayName === 'radiogroup' ? (React__default["default"].createElement("fieldset", { "aria-describedby": helpText && descriptionId, "aria-invalid": error },
            label && React__default["default"].createElement("legend", null, label),
            React__default["default"].createElement(Field, Object.assign({ options: options, ref: ref, id: labelId, onChange: onChange, value: value }, fieldProps)))) : (React__default["default"].createElement(Field, Object.assign({ options: options, "aria-label": (layout === 'input-only' && label) || null, "aria-describedby": helpText && descriptionId, "aria-invalid": error, ref: ref, id: labelId, onChange: onChange, value: value, checked: checked }, fieldProps))),
        helpText && (React__default["default"].createElement("span", { className: "ch-help-text", id: descriptionId }, helpText))));
});

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledHeading = styled__default["default"].h1 `
  display: block;
  margin: 0;

  font-size: ${(props) => props.theme.fontSizes[`h${props.level}`].mobile.fontSize};
  font-weight: ${(props) => props.theme.fontSizes[`h${props.level}`].mobile.fontWeight};
  line-height: ${(props) => props.theme.fontSizes[`h${props.level}`].mobile.lineHeight};

  ${({ theme }) => theme.mediaQueries.min.md} {
    font-size: ${(props) => props.theme.fontSizes[`h${props.level}`].fontSize};
    font-weight: ${(props) => props.theme.fontSizes[`h${props.level}`].fontWeight};
    line-height: ${(props) => props.theme.fontSizes[`h${props.level}`].lineHeight};
  }

  ${baseSpacing}
  ${baseStyles}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Heading = React.forwardRef((props, ref) => {
    const { tag, children, className, level } = props, rest = __rest(props, ["tag", "children", "className", "level"]);
    return (React__default["default"].createElement(StyledHeading, Object.assign({ as: tag || `h${level}`, className: className || '', level: level, ref: ref, "data-testid": "heading" }, rest), children));
});

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const getPadding = (props) => {
    const { sizing, leadingIcon } = props;
    return sizing === 'sm'
        ? `0.125rem 1.75rem 0.125rem ${leadingIcon ? '1.3125rem' : '0.5rem'}`
        : `0.34375rem 1.75rem 0.34375rem ${leadingIcon ? '1.3125rem' : '0.5rem'}`;
};
const StyledInputWrapper = styled__default["default"].span `
  position: relative;

  > .ch-icon {
    position: absolute;
    width: 1rem;
    left: 0.1875rem;
    position: absolute;
    top: 54%;
    transform: translateY(-50%);
  }

  > input {
    padding: ${(props) => getPadding(props)};
  }
`;
const StyledInput = styled__default["default"].input `
  align-items: center;
  display: flex;
  letter-spacing: -0.005625rem;
  transition: box-shadow 0.05s ease-in;
  background-color: ${(props) => props.theme.inputs.bgd};
  border: ${(props) => props.theme.inputs.border};
  border-radius: ${(props) => props.theme.inputs.borderRadius};
  box-shadow: ${(props) => props.theme.inputs.shadow};
  color: ${(props) => props.theme.inputs.fontColor};
  font-size: ${(props) => props.theme.fontSizes.text.fontSize};
  line-height: ${(props) => props.theme.fontSizes.text.lineHeight};

  &::placeholder {
    color: ${(props) => props.theme.inputs.placeholder};
  }

  &:focus,
  &[aria-invalid='true']:focus {
    border: ${(props) => props.theme.inputs.focus.border};
    box-shadow: ${(props) => props.theme.inputs.focus.shadow};
    outline: none;
  }

  &[aria-invalid='true'] {
    border: ${(props) => props.theme.inputs.error.border};
    box-shadow: ${(props) => props.theme.inputs.error.shadow};
  }

  // Hides native clear button
  &::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  ${baseSpacing}
  ${baseStyles}
`;
const StyledClear = styled__default["default"].button `
  position: absolute;
  top: 50%;
  right: 0.125rem;
  transform: translateY(-44%);
  border: none;
  background: none;
  cursor: pointer;
  display: ${(props) => (props.active ? 'block' : 'none')};

  path {
    fill: ${(props) => props.theme.inputs.clearBg};
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const InputWrapper = React.forwardRef((props, ref) => {
    const { leadingIcon, children, sizing } = props, rest = __rest(props, ["leadingIcon", "children", "sizing"]);
    return (React__default["default"].createElement(StyledInputWrapper, Object.assign({ ref: ref, sizing: sizing, leadingIcon: leadingIcon }, rest, { "data-testid": "input-wrapper" }),
        leadingIcon && React__default["default"].createElement("span", { className: "ch-icon" }, leadingIcon),
        children));
});

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Input = React.forwardRef((props, externalRef) => {
    const { type, value, sizing, onClear, onChange, className, leadingIcon, showClear = true } = props, rest = __rest(props, ["type", "value", "sizing", "onClear", "onChange", "className", "leadingIcon", "showClear"]);
    const [focused, setFocused] = React.useState(false);
    const focusedRef = React.useRef(false);
    const internalRef = React.useRef(null);
    const inputRef = (externalRef ||
        internalRef);
    const clearRef = React.useRef(null);
    const label = props['aria-label']
        ? `clear ${props['aria-label']}`
        : 'clear';
    const handleClear = () => {
        var _a;
        if (onClear) {
            onClear();
            return;
        }
        const input = inputRef.current;
        const nativeSetter = (_a = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _a === void 0 ? void 0 : _a.set;
        if (nativeSetter && input) {
            nativeSetter.call(input, '');
            input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        input.focus();
    };
    React.useEffect(() => {
        let blurring = false;
        const onFocus = (e) => {
            if (!focusedRef.current) {
                return;
            }
            if (e.target !== clearRef.current && e.target !== inputRef.current) {
                focusedRef.current = false;
                setFocused(false);
                return;
            }
            if (blurring) {
                blurring = false;
            }
        };
        const onFocusOut = () => {
            if (!focusedRef.current) {
                return;
            }
            blurring = true;
            setTimeout(() => {
                if (blurring) {
                    focusedRef.current = false;
                    setFocused(false);
                }
                blurring = false;
            }, 10);
        };
        document.addEventListener('focusin', onFocus);
        document.addEventListener('focusout', onFocusOut);
        return () => {
            document.removeEventListener('focusin', onFocus);
            document.removeEventListener('focusout', onFocusOut);
        };
    }, []);
    return (React__default["default"].createElement(InputWrapper, { leadingIcon: leadingIcon, sizing: sizing, className: `ch-input-wrapper ${className || ''}` },
        React__default["default"].createElement(StyledInput, Object.assign({}, rest, { value: value, type: type || 'text', ref: inputRef, className: "ch-input", onChange: onChange, "data-testid": "input", onFocus: () => {
                focusedRef.current = true;
                setFocused(true);
            } })),
        showClear && (React__default["default"].createElement(StyledClear, { type: "button", active: !!(onClear || (focused && value.length)), tabIndex: -1, "aria-label": label, onClick: handleClear, ref: clearRef },
            React__default["default"].createElement(Clear, { width: "1.25rem" })))));
});
Input.displayName = 'Input';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const SearchInput = React.forwardRef((props, ref) => {
    const searchProps = Object.assign(Object.assign({}, props), { sizing: 'sm', type: 'search', leadingIcon: React__default["default"].createElement(Search, { "data-testid": "search-icon" }) });
    return React__default["default"].createElement(Input, Object.assign({}, searchProps, { ref: ref }));
});

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const trapFocus = (e, content) => {
    if (!content) {
        return;
    }
    const focusableElements = content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableEl = focusableElements[0];
    const lastFocusableEl = focusableElements[focusableElements.length - 1];
    if (e.keyCode === KEY_CODES.TAB) {
        if (e.shiftKey && document.activeElement === firstFocusableEl) {
            e.preventDefault();
            lastFocusableEl.focus();
        }
        else if (!e.shiftKey && document.activeElement === lastFocusableEl) {
            e.preventDefault();
            firstFocusableEl.focus();
        }
    }
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Portal = ({ children, rootId, }) => {
    let el;
    let newRoot;
    const [mount, setMount] = React.useState();
    React.useEffect(() => {
        if (rootId) {
            el = document.getElementById(rootId);
        }
        if (el) {
            setMount(el);
        }
        else {
            newRoot = document.createElement('div');
            document.body.appendChild(newRoot);
            setMount(newRoot);
        }
        return () => {
            !!newRoot && newRoot.remove();
        };
    }, [rootId]);
    return mount ? ReactDOM.createPortal(children, mount) : null;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ModalContext = React.createContext({
    onClose() { },
    labelID: '',
    dismissible: true,
});
const useModalContext = () => {
    return React.useContext(ModalContext);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const fadeAnimation = styled.keyframes `
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const slideDownAndScaleUp = styled.keyframes `
  0% {
    opacity: 0;
    transform: translateY(4rem) scale(0.4);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledModal = styled__default["default"].div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.modal.wrapperBgd};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.theme.zIndex.modal};
  overflow-x: hidden;
  animation: ${fadeAnimation} 0.25s ease 0s forwards;
  will-change: opacity;

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: ${(props) => props.theme.radii.default};
    color: ${(props) => props.theme.modal.text};
    background-color: ${(props) => props.theme.modal.bgd};
    width: ${(props) => props.theme.modalSizes[props.size || 'md'].width};
    box-shadow: ${(props) => props.theme.modal.shadow};
    max-width: ${(props) => props.size === 'fullscreen'
    ? props.theme.modalSizes[props.size].width
    : '90vw'};
    height: ${(props) => props.size === 'fullscreen'
    ? props.theme.modalSizes[props.size].height
    : 'auto'};
    max-height: ${(props) => props.theme.modalSizes[props.size || 'md'].height};
    will-change: transform, opacity;
    animation: ${slideDownAndScaleUp} 0.15s ease 0s forwards;

    @media only screen and (max-height: 25rem) {
      position: absolute;
      top: 2rem;
      height: auto;
      max-height: none;
    }
  }

  ${baseSpacing}
  ${baseStyles}
`;
const StyledModalHeader = styled__default["default"].header `
  padding: 1rem 1.5rem;

  .ch-close-button {
    position: absolute;
    right: 1.55rem;
    top: 1rem;
  }

  .ch-title {
    padding-right: 2rem;
    margin: 0;
    font-size: ${(props) => props.theme.modal.titleSize};
    font-weight: ${(props) => props.theme.modal.titleWeight};
  }

  ${baseSpacing}
  ${baseStyles}
`;
const StyledModalBody = styled__default["default"].div `
  font-size: ${(props) => props.theme.fontSizes.text.fontSize};
  line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
  padding: 0 1.5rem;
  flex-grow: 1;
  overflow-y: auto;

  ${baseSpacing}
  ${baseStyles}
`;
const StyledModalButtonGroup = styled__default["default"].footer `
  padding: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.modal.border};
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  div:first-child {
    display: flex;
    flex-direction: row-reverse;
  }

  button + button {
    margin: 0 0.5rem 0 0.5rem;
  }

  @media (max-width: 35rem) {
    flex-direction: column;

    button {
      width: 100%;
    }

    div:first-child {
      display: flex;
      flex-direction: column;
    }

    button + button,
    div + div {
      margin: 0.5rem 0 0;
    }
  }

  ${baseSpacing}
  ${baseStyles}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Modal = (_a) => {
    var { size = 'md', onClose = () => null, children, rootId, dismissible = true } = _a, rest = __rest(_a, ["size", "onClose", "children", "rootId", "dismissible"]);
    const labelID = useUniqueId();
    const contentEl = React.useRef(null);
    const mainEl = React.useRef(null);
    const modalContext = { onClose, labelID, dismissible };
    dismissible && useClickOutside(mainEl, onClose);
    React.useEffect(() => {
        // return focus to the element that triggered the
        // modal when the modal closes
        const activeNode = document.activeElement;
        return () => !!activeNode && activeNode.focus();
    }, []);
    React.useEffect(() => {
        // ensure that the focus event fires after Portal render is complete
        setTimeout(() => { var _a; return (_a = mainEl.current) === null || _a === void 0 ? void 0 : _a.focus(); }, 0);
        const onKeydown = (e) => {
            if (e.keyCode === KEY_CODES.ESCAPE && onClose) {
                onClose();
            }
            else {
                trapFocus(e, contentEl.current);
            }
        };
        window.addEventListener('keydown', onKeydown);
        return () => window.removeEventListener('keydown', onKeydown);
    }, []);
    return (React__default["default"].createElement(Portal, { rootId: rootId },
        React__default["default"].createElement(ModalContext.Provider, { value: modalContext },
            React__default["default"].createElement(StyledModal, Object.assign({}, rest, { size: size, onClose: onClose, ref: contentEl, "data-testid": "modal" }),
                React__default["default"].createElement("section", { "aria-modal": true, ref: mainEl, role: "dialog", tabIndex: 0, "aria-labelledby": labelID }, children)))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ModalBody = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (React__default["default"].createElement(StyledModalBody, Object.assign({ "data-testid": "modal-body" }, rest), children));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ModalButton = (_a) => {
    var rest = __rest(_a, ["closesModal"]);
    return React__default["default"].createElement(Button, Object.assign({}, rest));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ModalButtonGroup = (_a) => {
    var { primaryButtons, secondaryButtons } = _a, rest = __rest(_a, ["primaryButtons", "secondaryButtons"]);
    const logger = useLogger();
    const context = useModalContext();
    const addCloseBehaviorToButton = (button) => {
        return React__default["default"].cloneElement(button, {
            onClick: () => {
                button.props.onClick && button.props.onClick();
                !!button.props.closesModal && context.onClose();
            },
            key: button.props.label,
        });
    };
    const addCloseBehaviorToButtons = (buttons) => {
        if (!context.dismissible ||
            !buttons ||
            (buttons instanceof Array && buttons.length === 0)) {
            context.dismissible &&
                logger.warn("the 'dismissible prop prevents buttons from closing the modal");
            return buttons;
        }
        if (!(buttons instanceof Array)) {
            return addCloseBehaviorToButton(buttons);
        }
        return buttons.map(addCloseBehaviorToButton);
    };
    return (React__default["default"].createElement(StyledModalButtonGroup, Object.assign({ "data-testid": "modal-button-group" }, rest),
        React__default["default"].createElement("div", { key: "primarybuttons" }, addCloseBehaviorToButtons(primaryButtons)),
        secondaryButtons && (React__default["default"].createElement("div", { key: "secondarybuttons" }, addCloseBehaviorToButtons(secondaryButtons)))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ModalHeader = (_a) => {
    var { tag: Tag = 'div', displayClose = true, title } = _a, rest = __rest(_a, ["tag", "displayClose", "title"]);
    const context = useModalContext();
    const handleClick = () => {
        return context && context.onClose();
    };
    return (React__default["default"].createElement(StyledModalHeader, Object.assign({}, rest),
        React__default["default"].createElement(Tag, { className: "ch-title", id: context.labelID }, title),
        displayClose && (context === null || context === void 0 ? void 0 : context.dismissible) && (React__default["default"].createElement("span", { className: "ch-close-button" },
            React__default["default"].createElement(IconButton, { label: "Close", icon: React__default["default"].createElement(Remove, null), onClick: handleClick })))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledHeader$1 = styled__default["default"].div `
  display: flex;
  height: 3rem;
  align-items: center;
  border-bottom: ${({ theme }) => `0.03125rem solid ${theme.navbar.headerBorder}`};
  padding: 1rem;

  .ch-title {
    flex: 1;
  }

  .ch-btn-close {
    margin-left: auto;
    margin-right: 1rem;
  }

  ${({ theme }) => theme.mediaQueries.min.md} {
    display: none;
  }
`;
const StyledNavbarItem = styled__default["default"].div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.25rem;
  min-height: 3rem;
  flex-direction: column;
  padding: 0 0.25rem;

  .ch-navigation-bar-item-label {
    text-align: center;
    display: ${({ showLabel }) => (showLabel ? 'block' : 'none')};
    font-size: ${({ theme }) => theme.fontSizes.footnote.fontSize};
    width: 100%;
    padding: 0 0.25rem;
    margin-bottom: 1.5rem;
  }
`;
const StyledNavbar = styled__default["default"](Flex) `
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  color: ${(props) => props.theme.navbar.text};
  background-color: ${({ theme }) => theme.navbar.bgd};
  width: 4.25rem;
  padding-top: 1rem;

  ${({ theme, responsive }) => theme.mediaQueries.max.md} {
    width: ${(props) => (props.responsive ? `20rem` : `4.25rem;`)};
    padding-top: ${(props) => (props.responsive ? `0` : `1rem`)};

    ${StyledHeader$1} {
      display: ${(props) => (props.responsive ? `flex` : `none`)};
    }

    ${StyledNavbarItem} {
      ${(props) => props.responsive &&
    ` 
        width: auto;
        flex-direction: row;

        .ch-navigation-bar-item-label {
          font-size: 1rem;
          text-align: left;
          margin-left: 1.5rem;
          margin-bottom: 0;
          display: block;
        }`};
    }
  }

  ${baseStyles}
  ${baseSpacing}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Navbar = (_a) => {
    var { children, className, responsive = true } = _a, rest = __rest(_a, ["children", "className", "responsive"]);
    return (React__default["default"].createElement(StyledNavbar, Object.assign({ "data-testid": "navigation-bar" }, rest, { className: className || '', responsive: responsive }), children));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const NavbarHeader = (props) => (React__default["default"].createElement(StyledHeader$1, Object.assign({}, props),
    React__default["default"].createElement("span", { className: "ch-title" }, props.title),
    props.onClose && (React__default["default"].createElement(IconButton, { className: "ch-btn-close", label: "Close", onClick: props.onClose, icon: React__default["default"].createElement(Remove, null) }))));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const NavbarItem = (_a) => {
    var { label, children, placement = 'right-start', icon, showLabel = false, badge, onClick, testId = 'navbar-item', tooltipContainerId } = _a, rest = __rest(_a, ["label", "children", "placement", "icon", "showLabel", "badge", "onClick", "testId", "tooltipContainerId"]);
    const IconButtonWithToolTip = React.useMemo(() => WithTooltip(IconButton, tooltipContainerId), [tooltipContainerId]);
    const ButtonComponent = rest['data-tooltip']
        ? IconButtonWithToolTip
        : IconButton;
    return (React__default["default"].createElement(StyledNavbarItem, { "data-testid": testId, showLabel: showLabel },
        children ? (React__default["default"].createElement(PopOver, { placement: placement, a11yLabel: label, renderButtonWrapper: (isActive, props) => (React__default["default"].createElement(ButtonComponent, Object.assign({ onClick: onClick, selected: isActive, icon: icon, badge: badge, label: label }, rest, props))) }, children)) : (React__default["default"].createElement(ButtonComponent, Object.assign({ icon: icon, label: label, onClick: onClick, badge: badge }, rest))),
        React__default["default"].createElement("label", { className: "ch-navigation-bar-item-label", "data-testid": "navbar-label", onClick: onClick }, label)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledCloseIconButton = styled__default["default"](IconButton) ``;
const StyledNotificationButton = styled__default["default"](SecondaryButton) ``;
const StyledNotification = styled__default["default"].div `
  align-items: center;
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${({ theme, severity }) => theme.notification[severity].text};
  background-color: ${({ theme, severity }) => theme.colors[severity].primary};
  padding: 0.75rem;
  box-shadow: ${({ theme }) => theme.notification.shadow};
  border-radius: 0.25rem;
  margin: 0.75rem;
  max-width: 45rem;
  pointer-events: auto;

  .ch-severity-icon {
    width: 1.5rem;
    flex-shrink: 0;
  }

  .ch-message {
    display: flex;
    flex-flow: column wrap;
    font-size: ${(props) => props.theme.fontSizes.text.fontSize};
    line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
    letter-spacing: -0.005625rem;
    margin: 0.5rem 0.75rem;

    &:empty {
      margin: 0;
    }
  }

  ${StyledNotificationButton} {
    margin-right: 1.6rem;
    border-color: ${({ theme, severity }) => theme.notification[severity].text};
  }

  ${StyledCloseIconButton},
  ${StyledNotificationButton} {
    background-color: ${({ theme, severity }) => theme.colors[severity].primary};
    color: ${({ theme, severity }) => theme.notification[severity].closeButton.text}};
  }

  ${StyledCloseIconButton}:hover, ${StyledCloseIconButton}:focus, ${StyledNotificationButton}:hover, ${StyledNotificationButton}:focus {
    background-color: ${({ theme, severity }) => theme.notification[severity].closeButton.hover.bgd};
    color: ${({ theme, severity }) => theme.notification[severity].closeButton.hover.text};
  }

  ${StyledCloseIconButton}:active, ${StyledNotificationButton}:active {
    background-color: ${({ theme, severity }) => theme.notification[severity].closeButton.active.bgd};
    color: ${({ theme, severity }) => theme.notification[severity].closeButton.active.text};
  }

  ${baseSpacing}
  ${baseStyles}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const DEFAULT_DELAY = 6000;
var Severity;
(function (Severity) {
    Severity["ERROR"] = "error";
    Severity["SUCCESS"] = "success";
    Severity["INFO"] = "info";
    Severity["WARNING"] = "warning";
})(Severity || (Severity = {}));
const iconMapping = {
    success: React__default["default"].createElement(CheckRound, null),
    warning: React__default["default"].createElement(Clock, null),
    error: React__default["default"].createElement(Caution, null),
    info: React__default["default"].createElement(Information, null),
};
const Notification = (props) => {
    const { tag, message, onClose, autoClose = false, autoCloseDelay = DEFAULT_DELAY, severity = Severity.ERROR, className, buttonProps, icon, children, } = props;
    const ariaLive = severity === Severity.ERROR ? 'assertive' : 'polite';
    const ariaRole = severity === Severity.ERROR ? 'alert' : 'status';
    React.useEffect(() => {
        if (!autoClose) {
            return;
        }
        const timer = setTimeout(onClose, autoCloseDelay);
        return () => clearTimeout(timer);
    }, []);
    return (React__default["default"].createElement(StyledNotification, Object.assign({ "aria-live": ariaLive, role: ariaRole, severity: severity, as: tag }, props, { className: className || '', "data-testid": "notification" }),
        React__default["default"].createElement("div", { className: "ch-severity-icon", "data-testid": "severity-icon" }, icon ? icon : iconMapping[severity]),
        React__default["default"].createElement("output", { className: "ch-message", "data-testid": "message", role: ariaRole }, message),
        buttonProps && React__default["default"].createElement(StyledNotificationButton, Object.assign({ "aria-hidden": true }, buttonProps)),
        children,
        onClose && (React__default["default"].createElement(StyledCloseIconButton, { label: "close", icon: React__default["default"].createElement(Remove, null), onClick: onClose }))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
exports.Severity = void 0;
(function (Severity) {
    Severity["ERROR"] = "error";
    Severity["SUCCESS"] = "success";
    Severity["INFO"] = "info";
    Severity["WARNING"] = "warning";
})(exports.Severity || (exports.Severity = {}));
exports.ActionType = void 0;
(function (ActionType) {
    ActionType[ActionType["ADD"] = 0] = "ADD";
    ActionType[ActionType["REMOVE"] = 1] = "REMOVE";
    ActionType[ActionType["REMOVE_ALL"] = 2] = "REMOVE_ALL";
})(exports.ActionType || (exports.ActionType = {}));
const initialState$2 = {
    notifications: [],
};
const reducer$2 = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case exports.ActionType.ADD: {
            const notification = Object.assign({ id: uuid.v4() }, payload);
            const notifications = (notification === null || notification === void 0 ? void 0 : notification.replaceAll)
                ? [notification]
                : [...state.notifications, notification];
            return Object.assign(Object.assign({}, state), { notifications });
        }
        case exports.ActionType.REMOVE: {
            const notifications = state.notifications.filter((notification) => (notification === null || notification === void 0 ? void 0 : notification.id) !== payload);
            return Object.assign(Object.assign({}, state), { notifications });
        }
        case exports.ActionType.REMOVE_ALL: {
            return Object.assign(Object.assign({}, state), { notifications: [] });
        }
        default:
            throw new Error('Incorrect type in NotificationProvider');
    }
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StateContext = React__default["default"].createContext(initialState$2);
const DispatchContext = React__default["default"].createContext(() => { });
const NotificationProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer$2, initialState$2);
    return (React__default["default"].createElement(StateContext.Provider, { value: state },
        React__default["default"].createElement(DispatchContext.Provider, { value: dispatch }, children)));
};
const useNotificationState = () => {
    const state = React.useContext(StateContext);
    return state;
};
const useNotificationDispatch = () => {
    const dispatch = React.useContext(DispatchContext);
    return dispatch;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledNotificationGroup = styled__default["default"].div `
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${(props) => props.theme.zIndex.notificationGroup};
  pointer-events: none;
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const NotificationGroup = () => {
    const { notifications } = useNotificationState();
    const dispatch = useNotificationDispatch();
    return (React__default["default"].createElement(Portal, { rootId: "notification-group-root" },
        React__default["default"].createElement(StyledNotificationGroup, { "data-testid": "notification-group" }, notifications.map((_a) => {
            var { id } = _a, rest = __rest(_a, ["id"]);
            return (React__default["default"].createElement(Notification, Object.assign({ key: id }, rest, { onClose: () => dispatch({ type: exports.ActionType.REMOVE, payload: id }) })));
        }))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const PopOverHeader = (_a) => {
    var { title, subtitle, imgSrc } = _a, rest = __rest(_a, ["title", "subtitle", "imgSrc"]);
    return (React__default["default"].createElement(StyledPopOverHeader, Object.assign({ "data-testid": "popover-header" }, rest),
        imgSrc && React__default["default"].createElement("img", { src: imgSrc, alt: title }),
        title && React__default["default"].createElement("p", { className: "ch-title" }, title),
        subtitle && React__default["default"].createElement("p", { className: "ch-subtitle" }, subtitle)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const PopOverSeparator = (props) => (React__default["default"].createElement(StyledPopOverSeparator, Object.assign({ "data-testid": "popover-separator" }, props)));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const PopOverSubMenu = (_a) => {
    var { text, children } = _a, rest = __rest(_a, ["text", "children"]);
    const getButtonContents = (isOpen) => {
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            text,
            React__default["default"].createElement(Caret, { className: "ch-caret", direction: "right", "data-testid": "submenu-caret" })));
    };
    return (React__default["default"].createElement(StyledSubMenu, null,
        React__default["default"].createElement(PopOver, Object.assign({ renderButton: (isOpen) => getButtonContents(), placement: "right-start", isSubMenu: true, a11yLabel: text }, rest), children)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const HiddenRadio = styled__default["default"].input `
  ${visuallyHidden};

  &[aria-invalid='true'] + .ch-radio {
    border: ${(props) => props.theme.inputs.error.border};
    box-shadow: ${(props) => props.theme.inputs.error.shadow};
  }
`;
const StyledRadioWrapper = styled__default["default"].span `
  > label {
    margin-left: 0.5rem;
  }
`;
const StyledRadio = styled__default["default"].div `
  background-color: ${(props) => props.theme.inputs.bgd};
  border: ${(props) => props.theme.inputs.border};
  border-radius: ${(props) => props.theme.radii.circle};
  box-shadow: ${(props) => props.theme.inputs.shadow};
  margin-bottom: -0.1875rem;
  transition: box-shadow 0.05s ease-in;

  ${HiddenRadio}:checked ~ & {
    background-color: ${(props) => props.theme.inputs.checked.bgd};
    border: ${(props) => props.theme.inputs.checked.border};
    box-shadow: ${(props) => props.theme.inputs.checked.shadow};
  }

  ${HiddenRadio}:focus ~ & {
    border: ${(props) => props.theme.inputs.focus.border};
    box-shadow: ${(props) => props.theme.inputs.focus.shadow};
  }
`;
const StyledRadioLabel = styled__default["default"](StyledRadio) `
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;

  &:after {
    background-color: ${(props) => props.checked
    ? props.theme.inputs.checked.fontColor
    : props.theme.inputs.bgd};
    border-radius: ${(props) => props.theme.radii.circle};
    content: '';
    display: block;
    height: 0.375rem;
    padding: 0.03125rem;
    width: 0.375rem;
    ${absoluteCenter};
  }
`;
const StyledRadioIcon = styled__default["default"](StyledRadio) `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-color: ${(props) => props.theme.colors.greys.white};
  box-shadow: none;
  margin: 0.1rem;

  ${HiddenRadio}:checked ~ & {
    svg {
      stroke: ${(props) => props.theme.colors.greys.white};
    }
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Radio = (props) => {
    const { value, checked, label, icon, onChange, testId } = props, rest = __rest(props, ["value", "checked", "label", "icon", "onChange", "testId"]);
    const radioNode = React.useRef(null);
    const labelId = useUniqueId();
    const handleChange = () => {
        var _a, _b;
        (_a = radioNode.current) === null || _a === void 0 ? void 0 : _a.click(); // simulate click the native checkbox
        (_b = radioNode.current) === null || _b === void 0 ? void 0 : _b.focus();
    };
    return (React__default["default"].createElement(StyledRadioWrapper, { className: "ch-radio-wrapper", "data-testid": testId },
        React__default["default"].createElement(HiddenRadio, Object.assign({ checked: checked, id: labelId, onChange: onChange, type: "radio", value: value, ref: radioNode, "data-testid": "hidden-radio", "aria-label": label }, rest)),
        icon ? (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(StyledRadioIcon, { checked: checked, className: "ch-radio", onClick: handleChange, "data-testid": "styled-radio-icon" },
                React__default["default"].createElement("span", { className: "ch-icon" }, icon)))) : (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(StyledRadioLabel, { checked: checked, className: "ch-radio", onClick: handleChange, "data-testid": "styled-radio" }),
            React__default["default"].createElement(Label, { htmlFor: labelId, className: "ch-radio-label" }, label)))));
};
Radio.displayName = 'Radio';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const RadioGroup = (props) => {
    const { options, value, onChange } = props;
    return (React__default["default"].createElement(React__default["default"].Fragment, null, options.map((option, index) => {
        return (React__default["default"].createElement(Radio, Object.assign({ value: option.value, key: `${option}-${index}`, label: option.label, checked: option.value === value, icon: option.icon, onChange: onChange, testId: option.testId }, option.inputProps)));
    })));
};
RadioGroup.displayName = 'RadioGroup';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledWrapper = styled__default["default"].div `
  position: relative;

  .ch-select-icon {
    pointer-events: none;
  }

  ${baseSpacing}
  ${baseStyles}
`;
const StyledSelectInput = styled__default["default"].select `
  background-color: ${(props) => props.theme.inputs.bgd};
  border: ${(props) => props.theme.inputs.border};
  border-radius: ${(props) => props.theme.inputs.borderRadius};
  box-shadow: ${(props) => props.theme.inputs.shadow};
  color: ${(props) => props.theme.inputs.fontColor};
  font-size: ${(props) => props.theme.fontSizes.text.fontSize};
  line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
  height: 2rem;
  letter-spacing: -0.005625rem;
  width: 100%;
  padding: 0.375rem 1.5rem 0.375rem 0.5rem;
  transition: box-shadow 0.05s ease-in;
  display: inline-block;
  appearance: none;

  &:focus,
  &[aria-invalid='true']:focus {
    border: ${(props) => props.theme.inputs.focus.border};
    box-shadow: ${(props) => props.theme.inputs.focus.shadow};
    outline: none;
  }

  &[aria-invalid='true'] {
    border: ${(props) => props.theme.inputs.error.border};
    box-shadow: ${(props) => props.theme.inputs.error.shadow};
  }

  ${baseSpacing}
  ${baseStyles}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const renderOptions = (options) => {
    return options.map(({ value, label }) => (React__default["default"].createElement("option", { key: value, value: value }, label)));
};
const upAndDownCaretStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '0.2rem',
    width: '1.5rem',
    height: '1.5rem',
};
const Select = React.forwardRef((props, ref) => (React__default["default"].createElement(StyledWrapper, null,
    React__default["default"].createElement(StyledSelectInput, Object.assign({ className: "ch-select", "data-testid": "select", ref: ref }, props), renderOptions(props.options)),
    React__default["default"].createElement(UpAndDownCaret, { style: upAndDownCaretStyle, className: "ch-select-icon", "data-testid": "select-icon" }))));
Select.displayName = 'Select';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledTextarea = styled__default["default"].textarea `
  background-color: ${(props) => props.theme.inputs.bgd};
  border: ${(props) => props.theme.inputs.border};
  border-radius: ${(props) => props.theme.inputs.borderRadius};
  box-shadow: ${(props) => props.theme.inputs.shadow};
  color: ${(props) => props.theme.inputs.fontColor};
  font-size: ${(props) => props.theme.fontSizes.text.fontSize};
  padding: 0.5rem;
  position: relative;
  min-height: 4rem;
  transition: box-shadow 0.05s ease-in;
  width: 100%;

  &:focus,
  &[aria-invalid='true']:focus {
    border: ${(props) => props.theme.inputs.focus.border};
    box-shadow: ${(props) => props.theme.inputs.focus.shadow};
    outline: none;
  }

  &[aria-invalid='true'] {
    border: ${(props) => props.theme.inputs.error.border};
    box-shadow: ${(props) => props.theme.inputs.error.shadow};
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Textarea = React__default["default"].forwardRef((_a, ref) => {
    var { label } = _a, props = __rest(_a, ["label"]);
    return (React__default["default"].createElement(StyledTextarea, Object.assign({ "aria-label": label, className: "ch-textarea", "data-testid": "textarea", ref: ref }, props)));
});
Textarea.displayName = 'Textarea';

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

var index_umd = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	factory(exports) ;
}(commonjsGlobal, (function (exports) {
	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	exports.debounce = debounce;
	exports.throttle = throttle;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

});

var index_umd$1 = /*@__PURE__*/unwrapExports(index_umd);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Todo - Use a defined range per aspect ratio, instead of the specific ratio value
function getAspectRatio(height, width) {
    const aspectRatio = width / height;
    if (aspectRatio > 1.6) {
        return 'r16by9';
    }
    if (aspectRatio > 1.4) {
        return 'r3by2';
    }
    if (aspectRatio > 1.25) {
        return 'r4by3';
    }
    if (aspectRatio > 0.9) {
        return 'r1by1';
    }
    if (aspectRatio > 0.7) {
        return 'r2by3';
    }
    if (aspectRatio > 0.4) {
        return 'r1by2';
    }
    return 'slim';
}
const useElementAspectRatio = (ref) => {
    const [ratio, setRatio] = React.useState(null);
    React.useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }
        const { height, width } = ref.current.getBoundingClientRect();
        setRatio(getAspectRatio(height, width));
    }, []);
    React.useEffect(() => {
        if (!ref.current) {
            return;
        }
        const handleResize = index_umd$1.debounce(50, (entries) => {
            const { height, width } = entries[0].contentRect;
            setRatio(getAspectRatio(height, width));
        });
        const resizeObserver = new index(handleResize);
        resizeObserver.observe(ref.current);
        return () => resizeObserver.disconnect();
    }, []);
    return ratio;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const sortedRatios = [
    'slim',
    'r1by2',
    'r2by3',
    'r1by1',
    'r4by3',
    'r3by2',
    'r16by9',
];
const ratioStyles = {
    '1': 'grid-template: 1fr / 1fr;',
    '1.slim': 'grid-template: repeat(2, 1fr) / 1fr;',
    '1.r2by3': 'grid-template: 1fr / 1fr;',
    '1.featured': `grid-template: "ft" 1fr / 1fr;`,
    '2': 'grid-template: 1fr / repeat(2,1fr);',
    '2.slim': `grid-template: repeat(3,1fr) / 1fr;`,
    '2.r1by2': 'grid-template: repeat(2,1fr) / 1fr;',
    '2.r2by3': 'grid-template: repeat(2,1fr) / 1fr;',
    '2.r4by3': 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
    '2.r16by9': `grid-template: 1fr / repeat(2,1fr);`,
    '2.featured': `grid-template: repeat(3,1fr) / repeat(2,1fr);
  grid-template-areas: 'ft ft' 'ft ft';`,
    '2.r16by9.featured': `grid-template: repeat(2,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v' 'ft ft v';`,
    '3': 'grid-template: repeat(3,1fr) / 1fr;',
    '3.r2by3': 'grid-template: repeat(3,1fr) / repeat(1,1fr);',
    '3.r1by1': 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
    '3.featured': `grid-template: repeat(3,1fr) / repeat(2,1fr);
    grid-template-areas: 'ft ft' 'ft ft';
  `,
    '3.r16by9.featured': `grid-template: repeat(2,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v';`,
    '4': 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
    '4.slim': 'grid-template: repeat(4,1fr) / 1fr;',
    '4.r2by3': 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
    '4.featured': `grid-template: repeat(3,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft ft' 'ft ft ft';`,
    '4.r16by9.featured': `grid-template-areas: 'ft ft v' 'ft ft v' 'ft ft v';`,
    '5': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
    '5.slim': 'grid-template: repeat(5,1fr) / 1fr;',
    '5.r1by2': 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
    '5.r2by3': 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
    '5.r3by2': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
    '5.r16by9': `grid-template: repeat(2,1fr) / repeat(3,1fr);`,
    '5.featured': `grid-template: repeat(4,1fr) / repeat(2,1fr);
    grid-template-areas: 'ft ft' 'ft ft';`,
    '5.r1by1.featured': `grid-template: repeat(3,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v';`,
    '6': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
    '6.slim': 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
    '6.r1by2': 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
    '6.r1by1': 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
    '6.r2by3': 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
    '6.r3by2': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
    '6.r16by9': `grid-template: repeat(2,1fr) / repeat(3,1fr);`,
    '6.featured': `grid-template: repeat(4,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft ft' 'ft ft ft';`,
    '6.r1by1.featured': `grid-template: repeat(3,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v';`,
    '7': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
    '7.slim': 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
    '7.r4by3': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
    '7.r16by9': `grid-template: repeat(2,1fr) / repeat(4,1fr);`,
    '7.featured': `grid-template: repeat(4,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft ft' 'ft ft ft';`,
    '7.r1by1.featured': `grid-template: repeat(4,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft v';`,
    '8': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
    '8.slim': 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
    '8.r4by3': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
    '8.r16by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
    '8.featured': `grid-template: repeat(5,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';`,
    '8.r1by1.featured': `grid-template: repeat(4,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft x';`,
    '8.r16by9.featured': `grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft x';`,
    '9': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
    '9.slim': `grid-template: repeat(5,1fr) / repeat(2,1fr);`,
    '9.r1by1': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
    '9.r16by9': `grid-template: repeat(3,1fr) / repeat(4,1fr);`,
    '9.featured': `grid-template: repeat(5,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';`,
    '9.r1by1.featured': `grid-template: repeat(5,1fr) / repeat(5,1fr);
    grid-template-areas: 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v';`,
    '10': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '10.slim': `grid-template: repeat(5,1fr) / repeat(2,1fr);`,
    '10.r1by1': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '10.r3by2': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
    '10.featured': `grid-template: repeat(5,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';`,
    '10.r1by1.featured': `grid-template: repeat(5,1fr) / repeat(5,1fr);
    grid-template-areas: 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v';`,
    '11': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '11.slim': 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
    '11.r1by1': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '11.r3by2': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
    '11.r16by9': `grid-template: repeat(3,1fr) / repeat(4,1fr);`,
    '11.featured': `grid-template: repeat(6,1fr) / repeat(6,1fr);
    grid-template-areas: 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft';`,
    '11.r1by1.featured': `grid-template-areas:
      'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'
      'ft ft ft ft ft v' 'ft ft ft ft ft x';`,
    '12': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '12.slim': 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
    '12.r2by3': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '12.r3by2': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
    '12.featured': `grid-template: repeat(6,1fr) / repeat(6,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft'
      'ft ft ft ft ft ft';`,
    '12.r1by1.featured': `grid-template-areas:
    'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'
    'ft ft ft ft ft v' 'ft ft ft ft ft x';`,
    '13': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '13.slim': 'grid-template: repeat(7,1fr) / repeat(2,1fr);',
    '13.r2by3': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
    '13.r1by1': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '13.r3by2': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '13.r16by9': `grid-template: repeat(3,1fr) / repeat(5,1fr);`,
    '13.featured': `grid-template: repeat(7,1fr) / repeat(6,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft'
      'ft ft ft ft ft ft';`,
    '13.r1by1.featured': `grid-template-areas:
      'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'
      'ft ft ft ft ft v' 'ft ft ft ft ft x';`,
    '14': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '14.slim': 'grid-template: repeat(7,1fr) / repeat(2,1fr);',
    '14.r2by3': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
    '14.r3by2': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '14.r16by9': `grid-template: repeat(3,1fr) / repeat(5,1fr);`,
    '14.featured': `grid-template: repeat(7,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft';`,
    '14.r1by1.featured': `grid-template-areas:
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v'
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft x';`,
    '15': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
    '15.slim': 'grid-template: repeat(8,1fr) / repeat(2,1fr);',
    '15.r1by2': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
    '15.r3by2': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '15.r16by9': `grid-template: repeat(3,1fr) / repeat(5,1fr);`,
    '15.featured': `grid-template: repeat(8,1fr) / repeat(8,1fr);
    grid-template-areas:
     'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft'
     'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,
    '15.r1by1.featured': `grid-template-areas:
     'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v'
     'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,
    '16': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '16.slim': 'grid-template: repeat(8,1fr) / repeat(2,1fr);',
    '16.r1by2': 'grid-template: repeat(6,1fr) / repeat(3,1fr);',
    '16.r1by1': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '16.featured': `grid-template: repeat(8,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,
    '16.r1by1.featured': `grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v'
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,
    '17': 'grid-template: repeat(5,1fr) / repeat(4,1fr);',
    '17.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
    '17.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
    '17.r1by1': 'grid-template: repeat(4,1fr) / repeat(5,1fr);',
    '17.featured': `grid-template: repeat(8,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,
    '17.r1by1.featured': `grid-template-areas:
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v'
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft x';`,
    '18': 'grid-template: repeat(5,1fr) / repeat(4,1fr);',
    '18.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
    '18.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
    '18.r1by1': 'grid-template: repeat(4,1fr) / repeat(5,1fr);',
    '18.featured': `grid-template: repeat(8,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,
    '18.r1by1.featured': `grid-template: repeat(9,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v'
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft x';`,
    '19': 'grid-template: repeat(5,1fr) / repeat(4,1fr);',
    '19.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
    '19.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
    '19.r1by1': 'grid-template: repeat(4,1fr) / repeat(5,1fr);',
    '19.featured': `grid-template: repeat(8,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,
    '19.r1by1.featured': `grid-template: repeat(9,1fr) / repeat(10,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft x';`,
    '20': 'grid-template: repeat(5,1fr) / repeat(4,1fr);',
    '20.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
    '20.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
    '20.r1by1': 'grid-template: repeat(4,1fr) / repeat(5,1fr);',
    '20.featured': `grid-template: repeat(11,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft';`,
    '20.r1by1.featured': `grid-template: repeat(10,1fr) / repeat(10,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft x';`,
    '21': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
    '21.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
    '21.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
    '21.r1by1': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
    '21.featured': `grid-template: repeat(11,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft';`,
    '21.r1by1.featured': `grid-template: repeat(8,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v'  
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft x';`,
    '22': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
    '22.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
    '22.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
    '22.r1by1': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
    '22.featured': `grid-template: repeat(11,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft';`,
    '22.r1by1.featured': `grid-template: repeat(9,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft x';`,
    '23': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
    '23.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
    '23.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
    '23.r1by1': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
    '23.featured': `grid-template: repeat(11,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,
    '23.r1by1.featured': `grid-template: repeat(8,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v'  
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,
    '24': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
    '24.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
    '24.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
    '24.r1by1': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
    '24.featured': `grid-template: repeat(11,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,
    '24.r1by1.featured': `grid-template: repeat(9,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,
    '25': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
    '25.slim': 'grid-template: repeat(9,1fr) / repeat(3,1fr);',
    '25.r1by2': 'grid-template: repeat(7,1fr) / repeat(4,1fr);',
    '25.r1by1': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
    '25.featured': `grid-template: repeat(11,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,
    '25.r1by1.featured': `grid-template: repeat(10,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,
    '26': 'grid-template: repeat(6,1fr) / repeat(5,1fr);',
    '26.slim': 'grid-template: repeat(9,1fr) / repeat(3,1fr);',
    '26.r1by2': 'grid-template: repeat(7,1fr) / repeat(4,1fr);',
    '26.r1by1': 'grid-template: repeat(6,1fr) / repeat(5,1fr);',
    '26.featured': `grid-template: repeat(11,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,
    '26.r1by1.featured': `grid-template: repeat(9,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft x';`,
};
const responsiveStyles = {
    '2.featured': `
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows: calc(100% / 3);
      grid-auto-rows: calc(100% / 3);
    }
  `,
    '3.r16by9': `
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: 50%;
      grid-auto-columns: 50%;
      grid-auto-flow: column;
    }
  `,
    '3.featured': `
    @media (max-width: 600px) {
      grid-template-areas: 'ft' 'ft';
      grid-template-columns: 1fr;
      grid-template-rows: 25%;
      grid-auto-rows: 25%;
    }
  `,
    '4.r16by9': `
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: 50%;
      grid-auto-columns: 50%;
      grid-auto-flow: column;
    }
  `,
    '5.r16by9': `grid-template: repeat(2,1fr) / repeat(3,1fr);
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: calc(100% / 3);
      grid-auto-columns: calc(100% / 3);
      grid-auto-flow: column;
    }
  `,
    '6.r16by9': `grid-template: repeat(2,1fr) / repeat(3,1fr);
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: calc(100% / 3);
      grid-auto-columns: calc(100% / 3);
      grid-auto-flow: column;
    }
  `,
    '7.r16by9': `
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: 25%;
      grid-auto-columns: 25%;
      grid-auto-flow: column;
    }
  `,
};
const portraitStyles = `
  @media (max-width: 600px) {
    grid-template-areas: 'ft ft' 'ft ft';
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 25%;
    grid-auto-rows: 25%;
  }
`;
const landscapeStyles = `
  @media (max-height: 600px) {
    grid-template-areas: 'ft ft' 'ft ft';
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: 25%;
    grid-auto-columns: 25%;
    grid-auto-flow: column;
  }
`;
const StyledGrid$1 = styled__default["default"].div `
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: ${(props) => props.theme.videoGrid.bgd};

  ${({ size, featured }) => ratioStyles[`${size}${featured ? '.featured' : ''}`] || ''}
  ${({ size, featured, ratio }) => {
    if (!ratio) {
        return;
    }
    let styles = '';
    const index = sortedRatios.indexOf(ratio);
    for (let i = 0; i <= index; i++) {
        const currentRatio = sortedRatios[i];
        const baseStyles = ratioStyles[`${size}.${currentRatio}${featured ? '.featured' : ''}`];
        styles += baseStyles || '';
    }
    const mobileStyles = responsiveStyles[`${size}.${ratio}${featured ? '.featured' : ''}`] ||
        responsiveStyles[`${size}${featured ? '.featured' : ''}`];
    if (mobileStyles) {
        styles += mobileStyles;
    }
    else if (ratio === 'r16by9' && (size > 7 || featured)) {
        styles += landscapeStyles;
    }
    else if (size > 7 || featured) {
        styles += portraitStyles;
    }
    return styles;
}};
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const gridData = { usingGrid: true };
const GridContext = React.createContext(null);
const VideoGrid = (_a) => {
    var { size, children, layout = 'standard' } = _a, rest = __rest(_a, ["size", "children", "layout"]);
    const gridEl = React.createRef();
    const ratio = useElementAspectRatio(gridEl);
    const gridSize = typeof size === 'number' ? size : React__default["default"].Children.count(children);
    return (React__default["default"].createElement(GridContext.Provider, { value: gridData },
        React__default["default"].createElement(StyledGrid$1, Object.assign({ ref: gridEl }, rest, { size: gridSize, ratio: ratio, featured: layout === 'featured', "data-testid": "video-grid" }), children)));
};
const useGridData = () => {
    const gridData = React.useContext(GridContext);
    return gridData;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledVideoTile = styled__default["default"].div `
  height: 100%;
  width: 100%;
  position: relative;
  background: ${(props) => props.theme.colors.greys.grey100};

  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: ${(props) => props.objectFit || 'cover'}};
  }

  .ch-icon {
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    background-color: papayawhip; /* TODO: figure out what this is supposed to be */
    margin-right: 0.5rem;
    flex: 0 0 1.5rem;
  }

  .ch-nameplate {
    backdrop-filter: blur(20px);
    background-color: rgba(46, 47, 52, 0.85);
    border-radius: 0.25rem;
    bottom: 0.5rem;
    color: ${(props) => props.theme.colors.greys.white};
    left: 0.5rem;
    max-width: calc(100% - 2rem);
    padding: 0.5rem;
    position: absolute;

    div {
      ${ellipsis};
      display: flex;
      align-items: center;
    }

    .ch-text {
      font-size: ${(props) => props.theme.fontSizes.text.fontSize};
      ${ellipsis};
      margin: 0;
    }
  }

  ${baseSpacing}
  ${baseStyles}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const VideoTile = React.forwardRef((props, ref) => {
    const { tag, className, nameplate } = props, rest = __rest(props, ["tag", "className", "nameplate"]);
    return (React__default["default"].createElement(StyledVideoTile, Object.assign({ as: tag, className: className || '', "data-testid": "video-tile" }, rest),
        React__default["default"].createElement("video", { ref: ref, className: "ch-video" }),
        nameplate && (React__default["default"].createElement("header", { className: "ch-nameplate" },
            React__default["default"].createElement("p", { className: "ch-text" }, nameplate)))));
});

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledGrid = styled__default["default"].div `
  display: grid;
  width: 100%;
  height: 100%;

  ${styledSystem.grid}
  ${baseSpacing}
  ${baseStyles}

  ${({ responsive, theme }) => responsive
    ? `
    ${theme.mediaQueries.max.md} {
      grid-template-columns: 1fr 1fr;
    }

    ${theme.mediaQueries.max.sm} {
      grid-template-columns: 1fr;
    }
  `
    : ''}

  ${(props) => props.css || ''}
`;
const StyledCell$1 = styled__default["default"].div `
  ${baseSpacing}
  ${styledSystem.grid}

  ${(props) => props.css || ''}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Grid = (_a) => {
    var { className, tag, children } = _a, rest = __rest(_a, ["className", "tag", "children"]);
    return (React__default["default"].createElement(StyledGrid, Object.assign({ as: tag, className: className || '' }, rest), children));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Cell = (_a) => {
    var { className, children } = _a, rest = __rest(_a, ["className", "children"]);
    return (React__default["default"].createElement(StyledCell$1, Object.assign({ className: className || '' }, rest), children));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledRoster = styled__default["default"].aside `
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  overflow-y: auto;
  background-color: ${(props) => props.theme.roster.bgd};
  box-shadow: 1rem 1rem 3.75rem 0 rgba(0, 0, 0, 0.1);
  border-left: 0.0625rem solid ${(props) => props.theme.roster.containerBorder};
  border-right: 0.0625rem solid ${(props) => props.theme.roster.containerBorder};

  ${({ theme }) => theme.mediaQueries.min.md} {
    width: ${(props) => props.theme.roster.maxWidth};
  }

  ${baseSpacing}
  ${baseStyles}
`;
const StyledTitle = styled__default["default"].span `
  display: inline-block;
  margin: 0 0.625rem 0 0;
  font-weight: 600;
  font-size: 0.675rem;
  color: ${(props) => props.theme.roster.secondaryText};
`;
const StyledGroupWrapper = styled__default["default"].div `
  margin: 0 0.5rem;

  & + & {
    margin-top: 1rem;
  }

  ${baseSpacing}
  ${baseStyles}
`;
const StyledGroup = styled__default["default"].div `
  background-color: ${(props) => props.theme.roster.fgd};
  border-radius: ${(props) => props.theme.radii.default};

  ${baseSpacing}
  ${baseStyles}
`;
const StyledHeader = styled__default["default"].div `
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 0.0625rem solid ${(props) => props.theme.roster.headerBorder};

  .ch-title {
    font-size: 0.875rem;
    color: ${(props) => props.theme.roster.primaryText};
    ${(props) => (props.isSearching ? 'opacity: 0;' : '')}
    ${ellipsis};
  }

  .ch-badge {
    margin-left: 0.5rem;
    ${(props) => (props.isSearching ? 'opacity: 0;' : '')}
  }

  .ch-buttons {
    margin-left: auto;
    display: flex;

    > * {
      margin-left: 0.5rem;
    }

    ${(props) => (props.isSearching ? 'opacity: 0;' : '')}
  }

  .ch-search-wrapper {
    position: absolute !important;
    bottom: 0.75rem;
    left: 0.5rem;
    right: 0.5rem;

    .ch-search-input {
      flex: 1;

      input {
        width: 100%;
      }
    }

    .ch-search-close {
      margin-left: 0.5rem;
    }
  }

  .ch-navigation-icon {
    margin-right: 0.5rem;
    margin-left: -0.5rem;

    ${({ theme }) => theme.mediaQueries.min.md} {
      display: none;
    }
  }

  ${baseSpacing}
  ${baseStyles}
`;
const StyledName = styled__default["default"].div `
  flex-grow: 1;
  min-width: 0;
  line-height: 1.5;

  .ch-name {
    ${ellipsis};
    font-size: 0.875rem;
    color: ${(props) => props.theme.roster.primaryText};
  }

  .ch-subtitle {
    ${ellipsis};
    font-size: 0.65rem;
    color: ${(props) => props.theme.roster.secondaryText};
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Roster = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return React__default["default"].createElement(StyledRoster, Object.assign({}, rest), children);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const PopOverMenu = (_a) => {
    var { menu, buttonProps, tooltipContainerId, a11yMenuLabel = '' } = _a, rest = __rest(_a, ["menu", "buttonProps", "tooltipContainerId", "a11yMenuLabel"]);
    const IconButtonWithToolTip = React.useMemo(() => WithTooltip(IconButton, tooltipContainerId), [tooltipContainerId]);
    const ButtonComponent = rest['data-tooltip']
        ? IconButtonWithToolTip
        : IconButton;
    const buttonComponentProps = rest['data-tooltip-position']
        ? { tooltipPosition: rest['data-tooltip-position'] }
        : {};
    return (React__default["default"].createElement(PopOver, { className: "ch-menu", a11yLabel: a11yMenuLabel, renderButtonWrapper: (isActive, props) => (React__default["default"].createElement(ButtonComponent, Object.assign({}, buttonComponentProps, buttonProps, props, rest, { className: classnames('ch-menu', buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className), icon: React__default["default"].createElement(Dots, null), label: a11yMenuLabel }))) }, menu));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const SearchBar = ({ onChange, onClose, value }) => {
    const inputEl = React.useRef(null);
    const handleClear = () => {
        var _a;
        const input = inputEl.current;
        const nativeSetter = (_a = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _a === void 0 ? void 0 : _a.set;
        if (nativeSetter && input) {
            nativeSetter.call(input, '');
            input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        onClose();
    };
    React.useEffect(() => {
        var _a;
        (_a = inputEl.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    return (React__default["default"].createElement(Flex, { container: true, alignItems: "center", className: "ch-search-wrapper" },
        React__default["default"].createElement(SearchInput, { "aria-label": "Search", className: "ch-search-input", ref: inputEl, onChange: onChange, value: value, onClear: handleClear })));
};
const RosterHeader = (_a) => {
    var { tag, title, badge, searchValue, onClose, onSearch, className, menu, a11yMenuLabel = '', searchLabel = 'Open search', closeLabel = 'Close', tooltipContainerId, children } = _a, rest = __rest(_a, ["tag", "title", "badge", "searchValue", "onClose", "onSearch", "className", "menu", "a11yMenuLabel", "searchLabel", "closeLabel", "tooltipContainerId", "children"]);
    const IconButtonWithToolTip = React.useMemo(() => WithTooltip(IconButton, tooltipContainerId), [tooltipContainerId]);
    const ButtonComponent = rest['data-tooltip']
        ? IconButtonWithToolTip
        : IconButton;
    const buttonComponentProps = rest['data-tooltip-position']
        ? { tooltipPosition: rest['data-tooltip-position'] }
        : {};
    const popOverMenuComponentProps = rest['data-tooltip']
        ? {
            ['data-tooltip-position']: rest['data-tooltip-position'],
            ['data-tooltip']: rest['data-tooltip'],
        }
        : {};
    const [isSearching, setIsSearching] = React.useState(false);
    const searchBtn = React.useRef(null);
    const openSearch = () => {
        setIsSearching(true);
    };
    const closeSearch = () => {
        var _a;
        onSearch === null || onSearch === void 0 ? void 0 : onSearch({
            target: {
                value: '',
            },
            currentTarget: {
                value: '',
            },
        });
        setIsSearching(false);
        (_a = searchBtn.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (React__default["default"].createElement(StyledHeader, Object.assign({ isSearching: isSearching, as: tag, className: className || '' }, rest),
        React__default["default"].createElement("div", { className: "ch-title" }, title),
        typeof badge === 'number' && badge > -1 && (React__default["default"].createElement(Badge, { className: "ch-badge", value: badge })),
        React__default["default"].createElement("div", { className: "ch-buttons" },
            onSearch && (React__default["default"].createElement(ButtonComponent, Object.assign({}, buttonComponentProps, { ref: searchBtn, label: searchLabel, onClick: openSearch, icon: React__default["default"].createElement(Search, null) }))),
            menu && (React__default["default"].createElement(PopOverMenu, Object.assign({}, popOverMenuComponentProps, { tooltipContainerId: tooltipContainerId, menu: menu, a11yMenuLabel: a11yMenuLabel }))),
            children,
            onClose && (React__default["default"].createElement(ButtonComponent, Object.assign({}, buttonComponentProps, { label: closeLabel, onClick: onClose, icon: React__default["default"].createElement(Remove, null) })))),
        isSearching && (React__default["default"].createElement(SearchBar, { value: searchValue, onClose: closeSearch, onChange: onSearch }))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const RosterGroup = (_a) => {
    var { tag, title, badge, className, children } = _a, rest = __rest(_a, ["tag", "title", "badge", "className", "children"]);
    return (React__default["default"].createElement(StyledGroupWrapper, Object.assign({ as: tag, className: className || '' }, rest),
        title && (React__default["default"].createElement(Flex, { alignItems: "center", pl: ".5rem", mb: ".5rem" },
            React__default["default"].createElement(StyledTitle, null, title),
            typeof badge === 'number' && badge > -1 && React__default["default"].createElement(Badge, { value: badge }))),
        React__default["default"].createElement(StyledGroup, null, children)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const RosterName = ({ name, subtitle }) => (React__default["default"].createElement(StyledName, null,
    React__default["default"].createElement("div", { className: "ch-name" }, name),
    subtitle && React__default["default"].createElement("div", { className: "ch-subtitle" }, subtitle)));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledCell = styled__default["default"].div `
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;

  .ch-mic {
    flex-shrink: 0;
    width: 1.5rem;
    line-height: 0;

    ${({ micPosition }) => micPosition === 'leading'
    ? `
        order: -1;
        margin-right: .75rem;
      `
    : ''}
  }

  .ch-menu {
    color: ${(props) => props.theme.buttons.icon.hover.bgd};

    &:hover,
    &:focus {
      color: ${(props) => props.theme.buttons.icon.hover.text};
    }
  }

  svg {
    width: 1.5rem;
    flex-shrink: 0;
  }

  > * {
    margin-right: 0.5rem;
  }

  > :last-child {
    margin-right: 0;
  }

  ${baseSpacing}
  ${baseStyles}
`;
const StyledLateMessage = styled__default["default"].div `
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.roster.secondaryText};

  > svg {
    margin-right: 0.25rem;
    color: ${({ theme }) => theme.roster.secondaryText};
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const LateMessage = ({ children, }) => (React__default["default"].createElement(StyledLateMessage, null,
    React__default["default"].createElement(Clock, null),
    children));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function getVideoIcon(isVideoEnabled, isSharingContent) {
    if (isSharingContent) {
        return React__default["default"].createElement(ScreenShare, null);
    }
    if (typeof isVideoEnabled === 'boolean') {
        return React__default["default"].createElement(Camera, { disabled: !isVideoEnabled });
    }
    return null;
}
const RosterCell = (props) => {
    const { tag, name, menu, subtitle, className, runningLate, muted, videoEnabled, sharingContent, poorConnection = false, microphone, a11yMenuLabel = '', extraIcon, buttonProps } = props, rest = __rest(props, ["tag", "name", "menu", "subtitle", "className", "runningLate", "muted", "videoEnabled", "sharingContent", "poorConnection", "microphone", "a11yMenuLabel", "extraIcon", "buttonProps"]);
    const videoIcon = getVideoIcon(videoEnabled, sharingContent);
    const showMic = typeof muted === 'boolean';
    const mic = microphone || (React__default["default"].createElement(Microphone, { muted: muted, poorConnection: poorConnection }));
    const popOverMenuComponentProps = rest['data-tooltip']
        ? {
            ['data-tooltip-position']: rest['data-tooltip-position'],
            ['data-tooltip']: rest['data-tooltip'],
        }
        : {};
    return (React__default["default"].createElement(StyledCell, Object.assign({ className: className || '', as: tag }, props, { "data-testid": "roster-cell" }),
        React__default["default"].createElement(RosterName, { name: name, subtitle: subtitle }),
        runningLate ? (React__default["default"].createElement(LateMessage, null, runningLate)) : (React__default["default"].createElement(React__default["default"].Fragment, null,
            showMic && React__default["default"].createElement("div", { className: "ch-mic" }, mic),
            extraIcon,
            videoIcon)),
        menu && (React__default["default"].createElement(PopOverMenu, Object.assign({}, popOverMenuComponentProps, { menu: menu, a11yMenuLabel: a11yMenuLabel, buttonProps: buttonProps })))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useFocusIn(el, delay = 3000) {
    const timeoutRef = React.useRef(null);
    const [isFocused, setIsFocused] = React.useState(false);
    React.useEffect(() => {
        if (!el.current) {
            return;
        }
        const onFocusIn = () => {
            clearTimeout(timeoutRef.current);
            setIsFocused(true);
        };
        const onFocusOut = () => {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setIsFocused(false);
            }, delay);
        };
        el.current.addEventListener('focusin', onFocusIn);
        el.current.addEventListener('focusout', onFocusOut);
        return () => {
            var _a, _b;
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            (_a = el.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('focusin', onFocusIn);
            (_b = el.current) === null || _b === void 0 ? void 0 : _b.removeEventListener('focusout', onFocusOut);
        };
    }, [el]);
    return { isFocused };
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useMouseMove(el, delay = 3000) {
    const timeoutRef = React.useRef(null);
    const [isMouseMoving, setIsMouseActive] = React.useState(false);
    React.useEffect(() => {
        if (!el.current) {
            return;
        }
        const onMouseMove = () => {
            clearTimeout(timeoutRef.current);
            setIsMouseActive(true);
            timeoutRef.current = setTimeout(() => {
                setIsMouseActive(false);
            }, delay);
        };
        el.current.addEventListener('mousemove', onMouseMove);
        return () => {
            var _a;
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            (_a = el.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('mousemove', onMouseMove);
        };
    }, [el]);
    return { isMouseMoving };
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const UserActivityContext = React.createContext(null);
const UserActivityProvider = ({ children, }) => {
    const ref = React.useRef(null);
    const { isFocused } = useFocusIn(ref);
    const { isMouseMoving } = useMouseMove(ref);
    const isUserActive = isFocused || isMouseMoving;
    const value = React.useMemo(() => ({
        isUserActive,
    }), [isUserActive]);
    return (React__default["default"].createElement("div", { ref: ref },
        React__default["default"].createElement(UserActivityContext.Provider, { value: value }, children)));
};
function useUserActivityState() {
    const state = React.useContext(UserActivityContext);
    if (!state) {
        throw new Error('useUserActivityState must be used within an UserActivityContextProvider');
    }
    return state;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledUserActivityManager = styled__default["default"].div `
  z-index: ${(props) => props.isActive ? props.theme.zIndex.controlBar : '-10'};
  visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};

  &.ch-active {
    animation: ${fadeAnimation} 0.25s ease 0s forwards;
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const UserActivityManager = ({ children, }) => {
    const { isUserActive } = useUserActivityState();
    return (React__default["default"].createElement(StyledUserActivityManager, { isActive: isUserActive, className: `${isUserActive ? 'ch-active' : ''}` }, children));
};
UserActivityManager.displayName = 'UserActivityManager';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledChannelList = styled__default["default"].ul `
  display: flex;
  flex-direction: column;
  width: 20rem;

  ${baseStyles}
  ${baseSpacing}
`;
const StyledChannelItem = styled__default["default"].li `
  position: relative;

  ${baseStyles};
  ${baseSpacing};

  & .ch-channel-button {
    width: 100%;
    height: 100%;
    padding: 11px 0;
    background-color: ${(props) => props.theme.channelList.bgd};
    border: none;
    border-radius: unset;
    justify-content: left;
    padding-left: 1rem;
    color: ${(props) => props.theme.channelList.fontColor};
    border: ${(props) => props.theme.channelList.border};
    font-family: ${(props) => props.theme.fonts.body};

    &:hover {
      background-color: ${(props) => props.theme.channelList.hover.bgd};
    }

    &:active {
      background-color: ${(props) => props.theme.channelList.active.bgd};
      color: ${(props) => props.theme.channelList.active.fontColor};
    }

    &:focus {
      border: ${(props) => props.theme.channelList.focus.border};
    }
  }

  & .ch-label {
    padding-left: 1.5rem;
  }

  & .ch-unread-badge {
    display: ${(props) => (props.unread ? 'inline' : 'none')};
    position: absolute;
    z-index: 2;
    top: 12px;
    left: 5px;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  &.ch-unread .ch-channel-button {
    font-weight: bold;
  }

  &.ch-selected .ch-channel-button {
    background-color: ${(props) => props.theme.colors.primary.light};
    color: ${(props) => props.theme.channelList.selected.fontColor};

    &:focus {
      border: ${(props) => props.theme.channelList.focus.selectedBorder};
    }
  }

  & .ch-popover-toggle {
    position: absolute;
    right: 1rem;
    margin: 0.5rem 0;
    height: 1.5rem;
    border-radius: 50%;

    .ch-channel-actions {
      border: 1px solid transparent;
    }

    & g {
      fill: ${(props) => props.theme.channelList.active.fontColor};
    }

    & button:focus .ch-channel-actions {
      border: ${(props) => props.theme.channelList.focus.selectedBorder};
      border-radius: 50%;
    }

    &:hover,
    &:active {
      background-color: ${(props) => props.theme.channelList.iconButton.activeBgd};

      & g {
        fill: ${(props) => props.theme.colors.primary.light};
      }
    }
  }

  & .ch-detailed-channel {
    display: grid;
    grid-template-rows: 17px 1fr max-content;
    grid-gap: 16px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.channelList.bgd};
    color: ${(props) => props.theme.channelList.fontColor};
    border-bottom: 0.5px solid #d3d3d3;
    font-family: ${(props) => props.theme.fonts.body};

    &:hover {
      background-color: ${(props) => props.theme.channelList.hover.bgd};
    }

    &:active {
      background-color: ${(props) => props.theme.channelList.active.bgd};
      color: ${(props) => props.theme.channelList.active.fontColor};
    }

    &:focus {
      border: ${(props) => props.theme.channelList.focus.border};
    }
  }

  & .ch-detailed-channel-name {
    font-weight: bold;
    padding-left: 25px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    max-width: 85%;
  }

  & .ch-detailed-channel-message {
    grid-row: span 2;
    padding-left: 25px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    max-width: 90%;
  }

  & .ch-detailed-channel-message-time {
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    font-size: 8px;
    max-width: 15%;
    text-align: right;
  }

  & .ch-unread-badge-detailed {
    display: ${(props) => (props.unread ? 'inline' : 'none')};
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 5px;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  &.ch-selected .ch-detailed-channel {
    background-color: ${(props) => props.theme.colors.primary.light};
    color: ${(props) => props.theme.channelList.selected.fontColor};

    &:focus {
      border: ${(props) => props.theme.channelList.focus.selectedBorder};
    }
  }

  & .ch-popover-toggle-detailed {
    position: absolute;
    top: 1.75rem;
    right: 1rem;
    margin: 0.5rem 0;
    height: 1.5rem;
    border-radius: 50%;

    .ch-channel-actions {
      border: 1px solid transparent;
    }

    & g {
      fill: ${(props) => props.theme.channelList.active.fontColor};
    }

    & button:focus .ch-channel-actions {
      border: ${(props) => props.theme.channelList.focus.selectedBorder};
      border-radius: 50%;
    }

    &:hover,
    &:active {
      background-color: ${(props) => props.theme.channelList.iconButton.activeBgd};

      & g {
        fill: ${(props) => props.theme.colors.primary.light};
      }
    }
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ChannelList = (props) => {
    return (React__default["default"].createElement(StyledChannelList, Object.assign({}, props, { "data-testid": "channel-list" }), props.children));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ChannelItem = (props) => {
    const { name, actions, isSelected, onClick, unread, unreadBadgeLabel, lastChannelMessage, lastChannelMessageTimestamp, } = props;
    const displayDetailedView = lastChannelMessage || lastChannelMessageTimestamp;
    const displayUnreadBadge = unread && unreadBadgeLabel;
    const displayPopOver = actions && isSelected;
    return (React__default["default"].createElement(StyledChannelItem, Object.assign({}, props, { className: classnames({ 'ch-selected': isSelected, 'ch-unread': unread }) }), displayDetailedView ? (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: 'ch-detailed-channel', onClick: onClick },
            React__default["default"].createElement("div", { className: "ch-detailed-channel-name" }, name),
            React__default["default"].createElement("div", { className: "ch-detailed-channel-message" }, lastChannelMessage),
            React__default["default"].createElement("div", { className: "ch-detailed-channel-message-time" }, lastChannelMessageTimestamp)),
        displayUnreadBadge && (React__default["default"].createElement(Badge, { value: unreadBadgeLabel, className: "ch-unread-badge-detailed" })),
        displayPopOver && (React__default["default"].createElement(PopOver, { className: 'ch-popover-toggle-detailed', a11yLabel: "Open channel options", placement: "bottom-end", renderButton: (isOpen) => (React__default["default"].createElement(Dots, { width: "1.5rem", height: "1.5rem", className: `${isOpen ? 'isOpen' : ''} ch-channel-actions`, "data-testid": "channel-actions" })), children: actions })))) : (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(Button, { className: "ch-channel-button", label: name, onClick: onClick }),
        displayUnreadBadge && (React__default["default"].createElement(Badge, { value: unreadBadgeLabel, className: "ch-unread-badge" })),
        displayPopOver && (React__default["default"].createElement(PopOver, { a11yLabel: "Open channel options", placement: "bottom-end", renderButton: (isOpen) => (React__default["default"].createElement(Dots, { width: "1.5rem", height: "1.5rem", className: `${isOpen ? 'isOpen' : ''} ch-channel-actions`, "data-testid": "channel-actions" })), children: actions }))))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledChatBubbleContainer = styled__default["default"].div `
  display: flex;
  flex-direction: row;
  font-size: 0.65rem;
  margin-left: 1rem;
  align-items: center;
  background-color: ${(props) => props.theme.chatBubble.container.bgd};
  width: 100%;

  .ch-timestamp {
    padding-right: ${(props) => (props.actions ? '1rem' : '2.5rem')};
  }

  ${baseSpacing}
  ${baseStyles}
`;
const StyledChatBubble = styled__default["default"].div `
  background-color: ${(props) => props.theme.chatBubble[props.variant].bgd};
  padding: 0.625rem 1rem;
  border-radius: 4px;
  width: fit-content;
  color: ${(props) => props.theme.chatBubble[props.variant].fontColor};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  line-height: 20px;
  width: ${(props) => (props.editable ? '100%' : 'fit-content')};
  max-width: 70.6%;
  font-size: 0.875rem;
  position: relative;
  margin-bottom: ${(props) => (props.editable ? '4rem' : 'unset')};
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;

  & .ch-header {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
    align-items: baseline;
  }

  & .ch-sender-name {
    font-weight: bold;
    padding-right: 0.5rem;
  }

  & .ch-header-timestamp {
    font-size: 0.65rem;
  }

  & svg {
    position: absolute;
    height: 19px;
    width: 11px;
    margin-top: -14px;
    margin-left: -25px;

    & .ch-chat-bubble-tail {
      fill: ${(props) => props.theme.chatBubble[props.variant].bgd};
    }
  }

  .ch-input {
    width: 100%;
  }

  .ch-edit-buttons {
    position: absolute;
    margin-top: 1rem;
    display: flex;
    flex-direction: row-reverse;
    width: 10rem;
    justify-content: space-between;
  }

  ${baseSpacing};
  ${baseStyles};
`;
const StyledChatBubbleInfo = styled__default["default"].div `
  display: flex;
  margin-right: 0.5rem;
  margin-left: auto;
  color: ${(props) => props.theme.chatBubble.container.fontColor};
  align-items: center;

  & .ch-message-actions {
    border: 1px solid transparent;
    border-radius: 50%;
  }

  & button:hover .ch-message-actions {
    background-color: ${(props) => props.theme.buttons.icon.hover.bgd};

    & g {
      fill: ${(props) => props.theme.buttons.icon.hover.text};
    }
  }

  & button:focus .ch-message-actions {
    border: 1px solid ${(props) => props.theme.colors.primary.dark};
    border-radius: 50%;
  }

  & .ch-message-actions g {
    fill: ${(props) => props.theme.chatBubble.container.fontColor};
  }

  & .ch-message-actions.isOpen {
    background-color: ${(props) => props.theme.buttons.icon.active.bgd};
    border-radius: 50%;

    & g {
      fill: ${(props) => props.theme.buttons.icon.active.text};
    }
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ChatBubble = (_a) => {
    var { variant, senderName, timestamp, showTail, redacted, children } = _a, rest = __rest(_a, ["variant", "senderName", "timestamp", "showTail", "redacted", "children"]);
    return (React__default["default"].createElement(StyledChatBubble, Object.assign({ variant: variant, editable: false }, rest, { "data-testid": "chat-bubble" }),
        (senderName || timestamp) && (React__default["default"].createElement("div", { className: "ch-header" },
            senderName && (React__default["default"].createElement("div", { className: "ch-sender-name", "data-testid": "chat-bubble-sender-name" }, senderName)),
            timestamp && (React__default["default"].createElement("div", { className: "ch-header-timestamp", "data-testid": "chat-bubble-timestamp" }, timestamp)))),
        children && React__default["default"].createElement("div", null, children),
        showTail && (React__default["default"].createElement("svg", { viewBox: "0 0 4 9", "data-testid": "tail" },
            React__default["default"].createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React__default["default"].createElement("g", { transform: "translate(0, -53)", className: "ch-chat-bubble-tail" },
                    React__default["default"].createElement("path", { d: "M4,62 L3.92789928,61.999999 C2.89671177,62.0004988 1.33197354,61.8123902 0.200755581,60.8250184 C-0.0781312712,60.5814641 -0.0639788041,60.0290387 0.229060515,59.8181428 C1.47198013,58.9247413 3.99237825,57.6821586 4,52.9112516 L4,52.9112516 L4,62 Z" })))))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const EditableChatBubble = (props) => {
    const { showName = true, variant, senderName, content, showTail, cancel, cancelLabel = 'Cancel', save, saveLabel = 'Save' } = props, rest = __rest(props, ["showName", "variant", "senderName", "content", "showTail", "cancel", "cancelLabel", "save", "saveLabel"]);
    const [text, setText] = React.useState(content);
    const inputEl = React.useRef(null);
    React.useEffect(() => {
        if (inputEl && inputEl.current) {
            inputEl.current.focus();
        }
    }, []);
    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    };
    return (React__default["default"].createElement(StyledChatBubble, Object.assign({ variant: variant, editable: true }, rest, { "data-testid": "editable-chat-bubble" }),
        showName && React__default["default"].createElement("div", { className: "ch-sender-name" }, senderName),
        React__default["default"].createElement("form", { "data-testid": "form", onSubmit: (e) => save(e, text) },
            React__default["default"].createElement(Input, { onChange: handleChange, value: text, showClear: false, ref: inputEl }),
            React__default["default"].createElement("div", { className: "ch-edit-buttons" },
                React__default["default"].createElement(PrimaryButton, { label: saveLabel, "data-testid": "save-button", onClick: (e) => save(e, text) }),
                React__default["default"].createElement(SecondaryButton, { label: cancelLabel, onClick: cancel, "data-testid": "cancel-button" }))),
        showTail && (React__default["default"].createElement("svg", { viewBox: "0 0 4 9", "data-testid": "tail" },
            React__default["default"].createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React__default["default"].createElement("g", { transform: "translate(0, -53)", className: "ch-chat-bubble-tail" },
                    React__default["default"].createElement("path", { d: "M4,62 L3.92789928,61.999999 C2.89671177,62.0004988 1.33197354,61.8123902 0.200755581,60.8250184 C-0.0781312712,60.5814641 -0.0639788041,60.0290387 0.229060515,59.8181428 C1.47198013,58.9247413 3.99237825,57.6821586 4,52.9112516 L4,52.9112516 L4,62 Z" })))))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ChatBubbleContainer = React__default["default"].forwardRef((props, ref) => {
    const { timestamp, actions, tooltipContainerId, a11yLabel = 'Open channel options' } = props, rest = __rest(props, ["timestamp", "actions", "tooltipContainerId", "a11yLabel"]);
    const IconButtonWithToolTip = React.useMemo(() => WithTooltip(IconButton, tooltipContainerId), [tooltipContainerId]);
    const ButtonComponent = rest['data-tooltip']
        ? IconButtonWithToolTip
        : IconButton;
    const buttonComponentProps = rest['data-tooltip-position']
        ? { tooltipPosition: rest['data-tooltip-position'] }
        : {};
    return (React__default["default"].createElement(StyledChatBubbleContainer, Object.assign({ "data-testid": "chat-bubble-container", ref: ref, actions: actions }, rest),
        props.children,
        React__default["default"].createElement(StyledChatBubbleInfo, null,
            timestamp && (React__default["default"].createElement("span", { className: "ch-timestamp", "data-testid": "message-time" }, timestamp)),
            actions && (React__default["default"].createElement(PopOver, { a11yLabel: a11yLabel, placement: "bottom-end", renderButtonWrapper: (isActive, props) => (React__default["default"].createElement(ButtonComponent, Object.assign({}, buttonComponentProps, { icon: React__default["default"].createElement(Dots, { width: "1.5rem", height: "1.5rem" }), selected: isActive }, props, { label: a11yLabel }))), children: actions })))));
});

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Create the keyframes
const rotate = styled.keyframes `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledInfiniteList = styled__default["default"].ul `
  background-color: ${(props) => props.theme.chatBubble.container.bgd};
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  /* disable scrolling while fetching */
  &.ch-not-scrollable {
    overflow-y: hidden;
  }

  ${baseSpacing}
  ${baseStyles}

  .ch-spinner {
    margin: 0 auto;
  }

  .ch-spinner svg {
    width: 2rem;
    height: 2rem;
    animation: ${rotate} 2s linear infinite;
    display: block;
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const InfiniteList = (props) => {
    const { isLoading, onLoad, items } = props;
    const listEnd = React.useRef(null);
    const currentTopItemRef = React.useRef(null);
    const firstNew = React.useRef(null);
    const prevLength = React.useRef(items.length);
    const newLength = React.useRef(0);
    const onLoadRef = React.useRef(onLoad);
    onLoadRef.current = onLoad;
    const [atBottom, setAtBottom] = React.useState(false);
    React.useEffect(() => {
        var _a;
        (_a = firstNew.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
    }, [items.length]);
    const topObserver = new IntersectionObserver((entries) => {
        const topEntry = entries[0];
        if (topEntry.isIntersecting) {
            onLoadRef.current();
        }
    }, {
        threshold: 1,
    });
    React.useEffect(() => {
        var _a;
        (_a = listEnd.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
        if (currentTopItemRef.current) {
            topObserver.observe(currentTopItemRef.current);
        }
        return () => {
            if (currentTopItemRef.current) {
                topObserver.unobserve(currentTopItemRef.current);
            }
        };
    }, []);
    if (items.length !== prevLength.current) {
        prevLength.current = newLength.current;
    }
    newLength.current = items.length;
    const getRef = (index) => {
        if (index === newLength.current - 1) {
            return newBottom;
        }
        else if (index === items.length - prevLength.current - 1 &&
            isLoading &&
            items.length !== prevLength.current) {
            return firstNew;
        }
        else {
            return null;
        }
    };
    const newBottom = React.useRef(null);
    let prevBottom;
    const messageList = items.map((item, i) => (React__default["default"].createElement("li", { id: i.toString(), key: i, ref: i === 0 ? currentTopItemRef : getRef(i), role: "article" }, item)));
    const bottomObserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setAtBottom(entry.isIntersecting);
    }, {
        threshold: 0,
    });
    React.useEffect(() => {
        if (atBottom && listEnd.current) {
            listEnd.current.scrollIntoView();
        }
        prevBottom = newBottom.current;
        if (prevBottom) {
            bottomObserver.unobserve(prevBottom);
        }
        if (newBottom.current) {
            bottomObserver.observe(newBottom.current);
            prevBottom = newBottom.current;
        }
        return () => {
            if (prevBottom) {
                bottomObserver.unobserve(prevBottom);
            }
        };
    }, [items.length]);
    return (React__default["default"].createElement(StyledInfiniteList, Object.assign({}, props, { className: `${isLoading ? 'ch-not-scrollable' : ''}`, "data-testid": "infinite-list", "aria-busy": isLoading ? true : false, role: "feed" }),
        isLoading && (React__default["default"].createElement("li", { className: "ch-spinner" },
            React__default["default"].createElement(Spinner, null))),
        messageList,
        React__default["default"].createElement("div", { ref: listEnd })));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledMessageAttachmentContent = styled__default["default"].div `
  display: flex;
  flex-direction: row;
  padding: 10px;

  & .ch-attachment-icon {
    height: 2rem;
    width: 2rem;
    margin: auto;
    background-color: ${(props) => props.theme.messageAttachment.icon.bgd};
    border-radius: 25px;

    & .ch-document-icon {
      margin: auto 0;
      color: ${(props) => props.theme.messageAttachment.icon.color};
    }
  }
  & .ch-attachment-name {
    margin-left: 1rem;

    & a:link,
    a:visited,
    a:hover,
    a:active {
      color: ${(props) => props.theme.messageAttachment.name.fontColor};
      text-decoration: none;
    }
  }
  & .ch-attachment-size {
    font-size: ${(props) => props.theme.messageAttachment.size.fontSize};
    color: ${(props) => props.theme.messageAttachment.size.fontColor};
    display: block;
    padding-top: 3px;
  }
`;
const StyledMessageAttachment = styled__default["default"].div `
  color: ${(props) => props.theme.messageAttachment.content.fontColor};
  display: flex;
  flex-direction: column;
  width: fit-content;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.messageAttachment.content.bgd};
  letter-spacing: ${(props) => props.theme.messageAttachment.content.letterSpacing};
  font-size: ${(props) => props.theme.fontSizes.text.fontSize};
  line-height: ${(props) => props.theme.fontSizes.text.lineHeight};

  & img {
    ${(props) => props.imgStyles};
  }

  ${baseSpacing}
  ${baseStyles}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const MessageAttachment = (_a) => {
    var { size = 'Unknown' } = _a, props = __rest(_a, ["size"]);
    const { name, downloadUrl, renderImg, imgUrl, imgOnClick, imgOnLoad } = props;
    return (React__default["default"].createElement(StyledMessageAttachment, Object.assign({}, props),
        React__default["default"].createElement(StyledMessageAttachmentContent, Object.assign({}, props),
            React__default["default"].createElement("div", { className: "ch-attachment-icon" },
                React__default["default"].createElement(Document, { className: "ch-document-icon", width: "2rem", height: "2rem" })),
            React__default["default"].createElement("div", { className: "ch-attachment-name" },
                React__default["default"].createElement("a", { target: "_blank", href: downloadUrl, rel: "noreferrer" }, name),
                React__default["default"].createElement("span", { className: "ch-attachment-size" }, size))),
        renderImg && (React__default["default"].createElement("img", { className: "ch-attachment-img", "data-testid": "preview-img", alt: imgUrl || downloadUrl, onClick: imgOnClick, src: imgUrl || downloadUrl, onLoad: imgOnLoad }))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const formatTime = (time) => {
    const t = new Date(time).toLocaleTimeString();
    return t.slice(0, t.length - 6) + t.slice(t.length - 3, t.length);
};

//
// Main
//

function memoize (fn, options) {
  var cache = options && options.cache
    ? options.cache
    : cacheDefault;

  var serializer = options && options.serializer
    ? options.serializer
    : serializerDefault;

  var strategy = options && options.strategy
    ? options.strategy
    : strategyDefault;

  return strategy(fn, {
    cache: cache,
    serializer: serializer
  })
}

//
// Strategy
//

function isPrimitive (value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean' // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic (fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);

  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg);
    cache.set(cacheKey, computedValue);
  }

  return computedValue
}

function variadic (fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3);
  var cacheKey = serializer(args);

  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args);
    cache.set(cacheKey, computedValue);
  }

  return computedValue
}

function assemble (fn, context, strategy, cache, serialize) {
  return strategy.bind(
    context,
    fn,
    cache,
    serialize
  )
}

function strategyDefault (fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyVariadic (fn, options) {
  var strategy = variadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyMonadic (fn, options) {
  var strategy = monadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

//
// Serializer
//

function serializerDefault () {
  return JSON.stringify(arguments)
}

//
// Cache
//

function ObjectWithoutPrototypeCache () {
  this.cache = Object.create(null);
}

ObjectWithoutPrototypeCache.prototype.has = function (key) {
  return (key in this.cache)
};

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key]
};

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value;
};

var cacheDefault = {
  create: function create () {
    return new ObjectWithoutPrototypeCache()
  }
};

//
// API
//

var src = memoize;
var strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
};
src.strategies = strategies;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const DEFAULT_DATE_OPTIONS = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
const formatDateUnmemoized = (dateStr, locale, dateOptions, todayText, yesterdayText) => {
    const options = dateOptions || DEFAULT_DATE_OPTIONS;
    const dateString = new Date(dateStr).toLocaleDateString(locale, options);
    // Get yesterday by subtracting 1 from the date, not by subtracting the number
    // of milliseconds in a typical day -- not all days are exactly 86400000ms.
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toLocaleDateString(locale, options);
    if (dateString === yesterdayString) {
        return yesterdayText || 'Yesterday';
    }
    if (dateString === new Date().toLocaleDateString(locale, options)) {
        return todayText || 'Today';
    }
    return dateString;
};
const formatDate = src(formatDateUnmemoized);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
exports.MeetingStatus = void 0;
(function (MeetingStatus) {
    MeetingStatus[MeetingStatus["Loading"] = 0] = "Loading";
    MeetingStatus[MeetingStatus["Succeeded"] = 1] = "Succeeded";
    MeetingStatus[MeetingStatus["Failed"] = 2] = "Failed";
    MeetingStatus[MeetingStatus["Ended"] = 3] = "Ended";
    MeetingStatus[MeetingStatus["JoinedFromAnotherDevice"] = 4] = "JoinedFromAnotherDevice";
    MeetingStatus[MeetingStatus["Left"] = 5] = "Left";
    MeetingStatus[MeetingStatus["TerminalFailure"] = 6] = "TerminalFailure";
    MeetingStatus[MeetingStatus["Reconnecting"] = 7] = "Reconnecting";
})(exports.MeetingStatus || (exports.MeetingStatus = {}));
exports.DeviceLabelTriggerStatus = void 0;
(function (DeviceLabelTriggerStatus) {
    DeviceLabelTriggerStatus["UNTRIGGERED"] = "UNTRIGGERED";
    DeviceLabelTriggerStatus["IN_PROGRESS"] = "IN_PROGRESS";
    DeviceLabelTriggerStatus["GRANTED"] = "GRANTED";
    DeviceLabelTriggerStatus["DENIED"] = "DENIED";
})(exports.DeviceLabelTriggerStatus || (exports.DeviceLabelTriggerStatus = {}));
exports.DeviceLabels = void 0;
(function (DeviceLabels) {
    DeviceLabels[DeviceLabels["None"] = 1] = "None";
    DeviceLabels[DeviceLabels["Audio"] = 2] = "Audio";
    DeviceLabels[DeviceLabels["Video"] = 3] = "Video";
    DeviceLabels[DeviceLabels["AudioAndVideo"] = 4] = "AudioAndVideo";
})(exports.DeviceLabels || (exports.DeviceLabels = {}));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var ContentActionType;
(function (ContentActionType) {
    ContentActionType[ContentActionType["STARTING"] = 0] = "STARTING";
    ContentActionType[ContentActionType["DID_STOP"] = 1] = "DID_STOP";
    ContentActionType[ContentActionType["UPDATE"] = 2] = "UPDATE";
    ContentActionType[ContentActionType["TOGGLE_PAUSE"] = 3] = "TOGGLE_PAUSE";
    ContentActionType[ContentActionType["REMOVE"] = 4] = "REMOVE";
    ContentActionType[ContentActionType["DENIED"] = 5] = "DENIED";
    ContentActionType[ContentActionType["RESET"] = 6] = "RESET";
})(ContentActionType || (ContentActionType = {}));
const initialState$1 = {
    tileId: null,
    paused: false,
    isLocalUserSharing: false,
    isLocalShareLoading: false,
    sharingAttendeeId: null,
};
function reducer$1(state, { type, payload }) {
    switch (type) {
        case ContentActionType.STARTING: {
            return Object.assign(Object.assign({}, state), { isLocalShareLoading: true });
        }
        case ContentActionType.UPDATE: {
            const { isLocalUser, tileState } = payload;
            const { tileId } = state;
            if (tileId === tileState.tileId ||
                (tileId && tileId > tileState.tileId)) {
                return state;
            }
            return {
                paused: false,
                tileId: tileState.tileId,
                isLocalShareLoading: false,
                isLocalUserSharing: isLocalUser,
                sharingAttendeeId: tileState.boundAttendeeId,
            };
        }
        case ContentActionType.REMOVE: {
            const { tileId } = state;
            if (tileId !== payload) {
                return state;
            }
            return initialState$1;
        }
        case ContentActionType.DID_STOP: {
            const { isLocalUserSharing } = state;
            if (isLocalUserSharing) {
                return initialState$1;
            }
            return Object.assign(Object.assign({}, state), { isLocalShareLoading: false, isLocalUserSharing: false, paused: false });
        }
        case ContentActionType.TOGGLE_PAUSE: {
            if (!state.isLocalUserSharing) {
                return state;
            }
            return Object.assign(Object.assign({}, state), { paused: !state.paused });
        }
        case ContentActionType.DENIED: {
            if (!state.isLocalShareLoading) {
                return state;
            }
            return Object.assign(Object.assign({}, state), { isLocalShareLoading: false });
        }
        case ContentActionType.RESET: {
            return initialState$1;
        }
        default:
            throw new Error('Incorrect type in VideoProvider');
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ContentShareContext = React.createContext(null);
const ContentShareControlContext = React.createContext(null);
const ContentShareProvider = ({ children }) => {
    const audioVideo = useAudioVideo();
    const [state, dispatch] = React.useReducer(reducer$1, initialState$1);
    const { paused, isLocalUserSharing, isLocalShareLoading } = state;
    const localUserTileIdRef = React.useRef(null);
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        const videoObserver = {
            videoTileDidUpdate: (tileState) => {
                if (!tileState.boundAttendeeId ||
                    !tileState.isContent ||
                    !tileState.tileId) {
                    return;
                }
                const { boundAttendeeId } = tileState;
                const baseAttendeeId = new amazonChimeSdkJs.DefaultModality(boundAttendeeId).base();
                const localAttendeeId = audioVideo.audioVideoController
                    .realtimeController.state.localAttendeeId;
                const isLocalUser = baseAttendeeId === localAttendeeId;
                if (!isLocalUser &&
                    localUserTileIdRef.current &&
                    localUserTileIdRef.current < tileState.tileId) {
                    audioVideo.stopContentShare();
                    localUserTileIdRef.current = null;
                }
                if (isLocalUser) {
                    localUserTileIdRef.current = tileState.tileId;
                }
                dispatch({
                    type: ContentActionType.UPDATE,
                    payload: {
                        tileState,
                        isLocalUser,
                    },
                });
            },
            videoTileWasRemoved: (tileId) => {
                if (tileId === localUserTileIdRef.current) {
                    localUserTileIdRef.current = null;
                }
                dispatch({
                    type: ContentActionType.REMOVE,
                    payload: tileId,
                });
            },
        };
        const contentShareObserver = {
            contentShareDidStop: () => {
                dispatch({ type: ContentActionType.DID_STOP });
            },
        };
        audioVideo.addObserver(videoObserver);
        audioVideo.addContentShareObserver(contentShareObserver);
        return () => {
            audioVideo.removeObserver(videoObserver);
            audioVideo.removeContentShareObserver(contentShareObserver);
            dispatch({ type: ContentActionType.RESET });
        };
    }, [audioVideo]);
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        const cb = (event) => {
            if (event.reason.name === 'NotAllowedError') {
                dispatch({ type: ContentActionType.DENIED });
            }
        };
        window.addEventListener('unhandledrejection', cb);
        return () => window.removeEventListener('unhandledrejection', cb);
    }, [isLocalShareLoading]);
    const toggleContentShare = React.useCallback((source) => __awaiter(void 0, void 0, void 0, function* () {
        if (!audioVideo) {
            return;
        }
        if (isLocalUserSharing || isLocalShareLoading) {
            audioVideo.stopContentShare();
        }
        else {
            if (source && typeof source === 'string') {
                audioVideo.startContentShareFromScreenCapture(source);
            }
            else if (source instanceof MediaStream) {
                audioVideo.startContentShare(source);
            }
            else {
                audioVideo.startContentShareFromScreenCapture();
            }
            dispatch({ type: ContentActionType.STARTING });
        }
    }), [audioVideo, isLocalUserSharing, isLocalShareLoading]);
    const togglePauseContentShare = React.useCallback(() => {
        if (!audioVideo || !isLocalUserSharing) {
            return;
        }
        if (paused) {
            audioVideo.unpauseContentShare();
        }
        else {
            audioVideo.pauseContentShare();
        }
        dispatch({ type: ContentActionType.TOGGLE_PAUSE });
    }, [audioVideo, paused, isLocalUserSharing]);
    const controlsValue = React.useMemo(() => ({
        paused,
        isLocalUserSharing,
        isLocalShareLoading,
        toggleContentShare,
        togglePauseContentShare,
    }), [
        paused,
        toggleContentShare,
        togglePauseContentShare,
        isLocalUserSharing,
        isLocalShareLoading,
    ]);
    return (React__default["default"].createElement(ContentShareContext.Provider, { value: state },
        React__default["default"].createElement(ContentShareControlContext.Provider, { value: controlsValue }, children)));
};
const useContentShareState = () => {
    const contentShareState = React.useContext(ContentShareContext);
    if (!contentShareState) {
        throw new Error('useContentShareState must be used within a ContentShareProvider');
    }
    return contentShareState;
};
const useContentShareControls = () => {
    const context = React.useContext(ContentShareControlContext);
    if (!context) {
        throw new Error('useContentShareControlContext must be used within ContentShareControlProvider');
    }
    return context;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var VideoTileActionType;
(function (VideoTileActionType) {
    VideoTileActionType[VideoTileActionType["UPDATE"] = 0] = "UPDATE";
    VideoTileActionType[VideoTileActionType["REMOVE"] = 1] = "REMOVE";
    VideoTileActionType[VideoTileActionType["RESET"] = 2] = "RESET";
})(VideoTileActionType || (VideoTileActionType = {}));
const initialState = {
    tiles: [],
    tileIdToAttendeeId: {},
    attendeeIdToTileId: {},
    size: 0,
};
const removeProperty = (obj, property) => {
    const newState = Object.assign({}, obj);
    delete newState[property];
    return newState;
};
function reducer(state, { type, payload }) {
    const { tiles, tileIdToAttendeeId, attendeeIdToTileId, size } = state;
    switch (type) {
        case VideoTileActionType.UPDATE: {
            const { tileId, attendeeId = '' } = payload;
            const tileStr = tileId.toString();
            const isPresent = tileIdToAttendeeId[tileStr];
            if (isPresent) {
                return state;
            }
            const newTiles = [...tiles, tileId];
            const tileIds = Object.assign(Object.assign({}, tileIdToAttendeeId), { [tileStr]: attendeeId });
            const attendeeIds = Object.assign(Object.assign({}, attendeeIdToTileId), { [attendeeId]: tileId });
            return {
                tiles: newTiles,
                tileIdToAttendeeId: tileIds,
                attendeeIdToTileId: attendeeIds,
                size: size + 1,
            };
        }
        case VideoTileActionType.REMOVE: {
            const { tileId } = payload;
            const attendeeId = tileIdToAttendeeId[tileId];
            const tileStr = tileId.toString();
            if (!attendeeId) {
                return state;
            }
            const newTiles = tiles.filter((id) => tileId !== id);
            const tileIds = removeProperty(tileIdToAttendeeId, tileStr);
            const attendeeIds = removeProperty(attendeeIdToTileId, attendeeId);
            return {
                tiles: newTiles,
                tileIdToAttendeeId: tileIds,
                attendeeIdToTileId: attendeeIds,
                size: size - 1,
            };
        }
        case VideoTileActionType.RESET: {
            return initialState;
        }
        default:
            throw new Error('Incorrect type in VideoProvider');
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Context$4 = React.createContext(null);
const RemoteVideoTileProvider = ({ children }) => {
    const audioVideo = useAudioVideo();
    const [state, dispatch] = React.useReducer(reducer, initialState);
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        const observer = {
            videoTileDidUpdate: (tileState) => {
                if ((tileState === null || tileState === void 0 ? void 0 : tileState.boundAttendeeId) &&
                    (tileState === null || tileState === void 0 ? void 0 : tileState.tileId) &&
                    !tileState.isContent &&
                    !tileState.localTile) {
                    const { tileId, boundAttendeeId } = tileState;
                    dispatch({
                        type: VideoTileActionType.UPDATE,
                        payload: {
                            tileId,
                            attendeeId: boundAttendeeId,
                        },
                    });
                }
            },
            videoTileWasRemoved: (tileId) => {
                dispatch({
                    type: VideoTileActionType.REMOVE,
                    payload: {
                        tileId,
                    },
                });
            },
        };
        audioVideo.addObserver(observer);
        return () => audioVideo.removeObserver(observer);
    }, [audioVideo]);
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        return () => dispatch({ type: VideoTileActionType.RESET });
    }, [audioVideo]);
    return React__default["default"].createElement(Context$4.Provider, { value: state }, children);
};
const useRemoteVideoTileState = () => {
    const state = React.useContext(Context$4);
    if (!state) {
        throw new Error('useRemoteVideoTileState must be used within a RemoteVideoTileProvider');
    }
    return state;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const TILE_TRANSITION_DELAY = 1500;
const FeaturedTileContext = React.createContext(null);
const FeaturedVideoTileProvider = ({ children }) => {
    const meetingManager = useMeetingManager();
    const { attendeeIdToTileId } = useRemoteVideoTileState();
    const activeTileRef = React.useRef(null);
    const [activeTile, setActiveTile] = React.useState(null);
    const timeout = React.useRef(null);
    const pendingAttendee = React.useRef(null);
    React.useEffect(() => {
        const activeSpeakerCallback = (activeAttendees) => {
            const activeId = activeAttendees[0];
            if (activeId === pendingAttendee.current) {
                return;
            }
            pendingAttendee.current = activeId;
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
            if (!activeId) {
                activeTileRef.current = null;
                setActiveTile(null);
                return;
            }
            const tileId = attendeeIdToTileId[activeId];
            if (!tileId) {
                if (activeTileRef.current) {
                    timeout.current = window.setTimeout(() => {
                        activeTileRef.current = null;
                        setActiveTile(null);
                    }, TILE_TRANSITION_DELAY);
                }
                return;
            }
            if (tileId === activeTileRef.current) {
                return;
            }
            // Set featured tile immediately if there is no current featured tile.
            // Otherwise, delay it to avoid tiles jumping around too frequently
            if (!activeTileRef.current) {
                activeTileRef.current = tileId;
                setActiveTile(tileId);
            }
            else {
                timeout.current = window.setTimeout(() => {
                    activeTileRef.current = tileId;
                    setActiveTile(tileId);
                }, TILE_TRANSITION_DELAY);
            }
        };
        meetingManager.subscribeToActiveSpeaker(activeSpeakerCallback);
        return () => meetingManager.unsubscribeFromActiveSpeaker(activeSpeakerCallback);
    }, [attendeeIdToTileId]);
    const value = React.useMemo(() => ({
        tileId: activeTile,
    }), [activeTile]);
    return (React__default["default"].createElement(FeaturedTileContext.Provider, { value: value }, children));
};
function useFeaturedTileState() {
    const state = React.useContext(FeaturedTileContext);
    if (!state) {
        throw new Error('useFeaturedTileState must be used within an FeaturedVideoTileProvider');
    }
    return state;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Context$3 = React.createContext(null);
const LocalAudioOutputProvider = ({ children }) => {
    const logger = useLogger();
    const audioVideo = useAudioVideo();
    const [isAudioOn, setIsAudioOn] = React.useState(true);
    const audioRef = React.useRef(null);
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        if (audioRef.current) {
            ((element) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    yield audioVideo.bindAudioElement(element);
                }
                catch (e) {
                    logger.error(`Failed to bind audio element. ${e}`);
                }
            }))(audioRef.current);
        }
        return () => {
            audioVideo.unbindAudioElement();
            setIsAudioOn(true);
        };
    }, [audioVideo]);
    const toggleAudio = React.useCallback(() => {
        if (!audioRef.current) {
            return;
        }
        setIsAudioOn(!isAudioOn);
        if (isAudioOn) {
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.unbindAudioElement();
        }
        else {
            ((element) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    yield (audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.bindAudioElement(element));
                }
                catch (e) {
                    logger.error(`Failed to bind audio element. ${e}`);
                }
            }))(audioRef.current);
        }
    }, [audioRef, audioVideo, isAudioOn]);
    const value = React.useMemo(() => ({ isAudioOn, toggleAudio }), [isAudioOn, toggleAudio]);
    return (React__default["default"].createElement(Context$3.Provider, { value: value },
        children,
        React__default["default"].createElement("audio", { ref: audioRef, style: { display: 'none' } })));
};
const useLocalAudioOutput = () => {
    const context = React.useContext(Context$3);
    if (!context) {
        throw new Error('useLocalAudioOutput must be used within LocalAudioOutputProvider');
    }
    return context;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Context$2 = React.createContext(null);
const LocalVideoProvider = ({ children, }) => {
    const logger = useLogger();
    const meetingManager = useMeetingManager();
    const audioVideo = useAudioVideo();
    const { devices, selectedDevice } = useVideoInputs();
    const [isVideoEnabled, setIsVideoEnabled] = React.useState(false);
    const [hasReachedVideoLimit, setHasReachedVideoLimit] = React.useState(false);
    const [tileId, setTileId] = React.useState(null);
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        if (audioVideo.hasStartedLocalVideoTile()) {
            setIsVideoEnabled(true);
        }
        const observer = {
            videoAvailabilityDidChange: (availability) => {
                if (!availability.canStartLocalVideo) {
                    setHasReachedVideoLimit(true);
                }
                else {
                    setHasReachedVideoLimit(false);
                }
                logger.info(`video availability changed: canStartLocalVideo ${availability.canStartLocalVideo}`);
            },
        };
        audioVideo.addObserver(observer);
        return () => {
            setIsVideoEnabled(false);
            audioVideo.removeObserver(observer);
        };
    }, [audioVideo]);
    React.useEffect(() => {
        if (hasReachedVideoLimit) {
            logger.warn('Reach the number of maximum active videos');
        }
    }, [hasReachedVideoLimit]);
    // In the case that the selected device is unplugged, the JS SDK will automatically call stopLocalVideoTile
    // We can then set the isVideoEnabled to false
    React.useEffect(() => {
        if (!(audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.hasStartedLocalVideoTile())) {
            setIsVideoEnabled(false);
        }
    }, [devices]);
    const toggleVideo = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (isVideoEnabled || !selectedDevice) {
                if (!selectedDevice) {
                    logger.warn('There is no input video device chosen!');
                }
                yield (audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.stopVideoInput());
                setIsVideoEnabled(false);
            }
            else if (!hasReachedVideoLimit) {
                yield meetingManager.startVideoInputDevice(selectedDevice);
                audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.startLocalVideoTile();
                setIsVideoEnabled(true);
            }
            else {
                logger.error('Video limit is reached and can not turn on more videos!');
            }
        }
        catch (error) {
            logger.error('Failed to toggle video');
        }
    }), [audioVideo, isVideoEnabled, hasReachedVideoLimit, selectedDevice]);
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        const observer = {
            videoTileDidUpdate: (tileState) => {
                if (!tileState.localTile ||
                    !tileState.tileId ||
                    tileId === tileState.tileId) {
                    return;
                }
                setTileId(tileState.tileId);
            },
        };
        audioVideo.addObserver(observer);
        return () => audioVideo.removeObserver(observer);
    }, [audioVideo, tileId]);
    const value = React.useMemo(() => ({
        tileId,
        isVideoEnabled,
        setIsVideoEnabled,
        hasReachedVideoLimit,
        setHasReachedVideoLimit,
        toggleVideo,
    }), [
        tileId,
        isVideoEnabled,
        setIsVideoEnabled,
        hasReachedVideoLimit,
        setHasReachedVideoLimit,
        toggleVideo,
    ]);
    return React__default["default"].createElement(Context$2.Provider, { value: value }, children);
};
const useLocalVideo = () => {
    const context = React.useContext(Context$2);
    if (!context) {
        throw new Error('useLocalVideo must be used within LocalVideoProvider');
    }
    return context;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const MeetingEventProviderContext = React.createContext(undefined);
const MeetingEventProvider = ({ children }) => {
    const [meetingEvent, setMeetingEvent] = React.useState();
    const meetingManager = useMeetingManager();
    React.useEffect(() => {
        function meetingEventUpdateCallback(name, attributes) {
            setMeetingEvent({ name, attributes });
        }
        meetingManager.subscribeToEventDidReceive(meetingEventUpdateCallback);
        return () => {
            meetingManager.unsubscribeFromEventDidReceive(meetingEventUpdateCallback);
        };
    }, []);
    return (React__default["default"].createElement(MeetingEventProviderContext.Provider, { value: meetingEvent }, children));
};
const useMeetingEvent = () => {
    const meetingEvent = React.useContext(MeetingEventProviderContext);
    return meetingEvent;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const RosterContext = React__default["default"].createContext(null);
const RosterProvider = ({ children, }) => {
    const meetingManager = useMeetingManager();
    const audioVideo = useAudioVideo();
    const rosterRef = React.useRef({});
    const [roster, setRoster] = React.useState({});
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        const rosterUpdateCallback = (chimeAttendeeId, present, externalUserId) => __awaiter(void 0, void 0, void 0, function* () {
            if (!present) {
                delete rosterRef.current[chimeAttendeeId];
                setRoster((currentRoster) => {
                    const _a = currentRoster, _b = chimeAttendeeId; _a[_b]; const rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                    return Object.assign({}, rest);
                });
                return;
            }
            const attendeeId = new amazonChimeSdkJs.DefaultModality(chimeAttendeeId).base();
            if (attendeeId !== chimeAttendeeId) {
                return;
            }
            const inRoster = rosterRef.current[chimeAttendeeId];
            if (inRoster) {
                return;
            }
            let attendee = { chimeAttendeeId };
            if (externalUserId) {
                attendee.externalUserId = externalUserId;
            }
            rosterRef.current[attendeeId] = attendee;
            // Update the roster first before waiting to fetch attendee info
            setRoster((oldRoster) => (Object.assign(Object.assign({}, oldRoster), { [attendeeId]: attendee })));
            if (meetingManager.getAttendee) {
                const externalData = yield meetingManager.getAttendee(attendeeId, externalUserId);
                // Make sure that the attendee is still on the roster
                if (!rosterRef.current[attendeeId]) {
                    return;
                }
                attendee = Object.assign(Object.assign({}, attendee), externalData);
                setRoster((oldRoster) => (Object.assign(Object.assign({}, oldRoster), { [attendeeId]: attendee })));
            }
        });
        audioVideo.realtimeSubscribeToAttendeeIdPresence(rosterUpdateCallback);
        return () => {
            setRoster({});
            rosterRef.current = {};
            audioVideo.realtimeUnsubscribeToAttendeeIdPresence(rosterUpdateCallback);
        };
    }, [audioVideo]);
    const value = React.useMemo(() => ({
        roster,
    }), [roster]);
    return (React__default["default"].createElement(RosterContext.Provider, { value: value }, children));
};
function useRosterState() {
    const state = React.useContext(RosterContext);
    if (!state) {
        throw new Error('userRosterState must be used within RosterProvider');
    }
    return state;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function noOpDeviceLabelHook() {
    return Promise.resolve(new MediaStream());
}
class MeetingManager {
    constructor(logger) {
        this.meetingSession = null;
        this.meetingStatus = exports.MeetingStatus.Loading;
        this.meetingStatusObservers = [];
        this.audioVideo = null;
        this.audioVideoObservers = {};
        this.meetingId = null;
        this.selectedAudioOutputDeviceObservers = [];
        this.selectedAudioInputDeviceObservers = [];
        this.selectedVideoInputDeviceObservers = [];
        this.audioInputDevices = null;
        this.audioOutputDevices = null;
        this.videoInputDevices = null;
        this.deviceLabelTriggerStatus = exports.DeviceLabelTriggerStatus.UNTRIGGERED;
        this.deviceLabelTriggerStatusObservers = [];
        this.deviceLabelTriggerObservers = [];
        this.activeSpeakerListener = null;
        this.activeSpeakerCallbacks = [];
        this.activeSpeakers = [];
        this.audioVideoCallbacks = [];
        this.devicesUpdatedCallbacks = [];
        this.meetingEventObserverSet = new Set();
        this.audioVideoDidStart = () => {
            console.log('[MeetingManager audioVideoDidStart] Meeting started successfully');
            this.meetingStatus = exports.MeetingStatus.Succeeded;
            this.publishMeetingStatus();
        };
        this.audioVideoDidStartConnecting = (reconnecting) => {
            if (this.meetingStatus === exports.MeetingStatus.Reconnecting) {
                return;
            }
            if (reconnecting) {
                this.meetingStatus = exports.MeetingStatus.Reconnecting;
                this.publishMeetingStatus();
            }
        };
        this.audioVideoDidStop = (sessionStatus) => {
            var _a;
            const sessionStatusCode = sessionStatus.statusCode();
            switch (sessionStatusCode) {
                case amazonChimeSdkJs.MeetingSessionStatusCode.MeetingEnded:
                    console.log(`[MeetingManager audioVideoDidStop] Meeting ended for all: ${sessionStatusCode}`);
                    this.meetingStatus = exports.MeetingStatus.Ended;
                    break;
                case amazonChimeSdkJs.MeetingSessionStatusCode.Left:
                    console.log(`[MeetingManager audioVideoDidStop] Left the meeting: ${sessionStatusCode}`);
                    this.meetingStatus = exports.MeetingStatus.Left;
                    break;
                case amazonChimeSdkJs.MeetingSessionStatusCode.AudioJoinedFromAnotherDevice:
                    console.log(`[MeetingManager audioVideoDidStop] Meeting joined from another device: ${sessionStatusCode}`);
                    this.meetingStatus = exports.MeetingStatus.JoinedFromAnotherDevice;
                    break;
                default:
                    // The following status codes are Failures according to MeetingSessionStatus
                    if (sessionStatus.isFailure() && !sessionStatus.isTerminal()) {
                        console.log(`[MeetingManager audioVideoDidStop] Non-Terminal failure occurred: ${sessionStatusCode}`);
                        this.meetingStatus = exports.MeetingStatus.Failed;
                    }
                    else if (sessionStatus.isTerminal()) {
                        console.log(`[MeetingManager audioVideoDidStop] Terminal failure occurred: ${sessionStatusCode}`);
                        this.meetingStatus = exports.MeetingStatus.TerminalFailure;
                    }
                    else {
                        console.log(`[MeetingManager audioVideoDidStop] session stopped with code ${sessionStatusCode}`);
                    }
            }
            this.publishMeetingStatus();
            (_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.removeObserver(this.audioVideoObservers);
            this.leave();
        };
        this.startAudioInputDevice = (device) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                yield ((_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.startAudioInput(device));
                this.selectedAudioInputDevice = device;
                this.publishSelectedAudioInputDevice();
            }
            catch (error) {
                console.error('MeetingManager failed to select audio input device', error);
                throw new Error('MeetingManager failed to select audio input device');
            }
        });
        this.startAudioOutputDevice = (deviceId) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            try {
                yield ((_b = this.audioVideo) === null || _b === void 0 ? void 0 : _b.chooseAudioOutput(deviceId));
                this.selectedAudioOutputDevice = deviceId;
                this.publishSelectedAudioOutputDevice();
            }
            catch (error) {
                console.error('MeetingManager failed to select audio output device', error);
                throw new Error('MeetingManager failed to select audio output device');
            }
        });
        this.startVideoInputDevice = (device) => __awaiter(this, void 0, void 0, function* () {
            var _c;
            try {
                yield ((_c = this.audioVideo) === null || _c === void 0 ? void 0 : _c.startVideoInput(device));
                this.selectedVideoInputDevice = device;
                this.publishSelectedVideoInputDevice();
            }
            catch (error) {
                console.error('MeetingManager failed to select video input device', error);
                throw new Error('MeetingManager failed to select video input device');
            }
        });
        this.stopVideoInputDevice = () => __awaiter(this, void 0, void 0, function* () {
            var _d;
            try {
                yield ((_d = this.audioVideo) === null || _d === void 0 ? void 0 : _d.stopVideoInput());
                this.selectedVideoInputDevice = undefined;
                this.publishSelectedVideoInputDevice();
            }
            catch (error) {
                console.error('MeetingManager failed to unselect video input device', error);
                throw new Error('MeetingManager failed to unselect video input device');
            }
        });
        this.selectVideoInputDevice = (device) => {
            this.selectedVideoInputDevice = device;
            this.publishSelectedVideoInputDevice();
        };
        this.invokeDeviceProvider = (deviceLabels) => {
            this.setupDeviceLabelTrigger(deviceLabels);
            this.publishDeviceLabelTrigger();
        };
        /**
         * ====================================================================
         * Subscriptions
         * ====================================================================
         */
        this.subscribeToAudioVideo = (callback) => {
            this.audioVideoCallbacks.push(callback);
        };
        this.unsubscribeFromAudioVideo = (callbackToRemove) => {
            this.audioVideoCallbacks = this.audioVideoCallbacks.filter((callback) => callback !== callbackToRemove);
        };
        this.publishAudioVideo = () => {
            this.audioVideoCallbacks.forEach((callback) => {
                callback(this.audioVideo);
            });
        };
        this.subscribeToActiveSpeaker = (callback) => {
            this.activeSpeakerCallbacks.push(callback);
            callback(this.activeSpeakers);
        };
        this.unsubscribeFromActiveSpeaker = (callbackToRemove) => {
            this.activeSpeakerCallbacks = this.activeSpeakerCallbacks.filter((callback) => callback !== callbackToRemove);
        };
        this.publishActiveSpeaker = () => {
            this.activeSpeakerCallbacks.forEach((callback) => {
                callback(this.activeSpeakers);
            });
        };
        this.subscribeToSelectedVideoInputDevice = (callback) => {
            this.selectedVideoInputDeviceObservers.push(callback);
        };
        this.unsubscribeFromSelectedVideoInputDevice = (callbackToRemove) => {
            this.selectedVideoInputDeviceObservers =
                this.selectedVideoInputDeviceObservers.filter((callback) => callback !== callbackToRemove);
        };
        this.publishSelectedVideoInputDevice = () => {
            for (const observer of this.selectedVideoInputDeviceObservers) {
                observer(this.selectedVideoInputDevice);
            }
        };
        this.subscribeToSelectedAudioInputDevice = (callback) => {
            this.selectedAudioInputDeviceObservers.push(callback);
        };
        this.unsubscribeFromSelectedAudioInputDevice = (callbackToRemove) => {
            this.selectedAudioInputDeviceObservers =
                this.selectedAudioInputDeviceObservers.filter((callback) => callback !== callbackToRemove);
        };
        this.publishSelectedAudioInputDevice = () => {
            for (const observer of this.selectedAudioInputDeviceObservers) {
                observer(this.selectedAudioInputDevice);
            }
        };
        this.subscribeToSelectedAudioOutputDevice = (callback) => {
            this.selectedAudioOutputDeviceObservers.push(callback);
        };
        this.unsubscribeFromSelectedAudioOutputDevice = (callbackToRemove) => {
            this.selectedAudioOutputDeviceObservers =
                this.selectedAudioOutputDeviceObservers.filter((callback) => callback !== callbackToRemove);
        };
        this.publishSelectedAudioOutputDevice = () => {
            for (const observer of this.selectedAudioOutputDeviceObservers) {
                observer(this.selectedAudioOutputDevice);
            }
        };
        this.subscribeToMeetingStatus = (callback) => {
            this.meetingStatusObservers.push(callback);
            callback(this.meetingStatus);
        };
        this.unsubscribeFromMeetingStatus = (callbackToRemove) => {
            this.meetingStatusObservers = this.meetingStatusObservers.filter((callback) => callback !== callbackToRemove);
        };
        this.publishMeetingStatus = () => {
            this.meetingStatusObservers.forEach((callback) => {
                callback(this.meetingStatus);
            });
        };
        this.subscribeToDeviceLabelTrigger = (callback) => {
            this.deviceLabelTriggerObservers.push(callback);
        };
        this.unsubscribeFromDeviceLabelTrigger = (callbackToRemove) => {
            this.deviceLabelTriggerObservers = this.deviceLabelTriggerObservers.filter((callback) => callback !== callbackToRemove);
        };
        this.publishDeviceLabelTrigger = () => {
            for (const callback of this.deviceLabelTriggerObservers) {
                callback();
            }
        };
        this.subscribeToDeviceLabelTriggerStatus = (callback) => {
            this.deviceLabelTriggerStatusObservers.push(callback);
        };
        this.unsubscribeFromDeviceLabelTriggerStatus = (callbackToRemove) => {
            this.deviceLabelTriggerStatusObservers =
                this.deviceLabelTriggerStatusObservers.filter((callback) => callback !== callbackToRemove);
        };
        this.publishDeviceLabelTriggerStatus = () => {
            for (const observer of this.deviceLabelTriggerStatusObservers) {
                observer(this.deviceLabelTriggerStatus);
            }
        };
        this.subscribeToEventDidReceive = (callback) => {
            this.meetingEventObserverSet.add(callback);
        };
        this.unsubscribeFromEventDidReceive = (callbackToRemove) => {
            this.meetingEventObserverSet.delete(callbackToRemove);
        };
        this.publishEventDidReceiveUpdate = (name, attributes) => {
            this.meetingEventObserverSet.forEach((callback) => callback(name, attributes));
        };
        this.logger = logger;
        this.eventDidReceiveRef = {
            eventDidReceive: (name, attributes) => {
                this.publishEventDidReceiveUpdate(name, attributes);
            },
        };
    }
    getDeviceLabels() {
        return this.deviceLabels;
    }
    initializeMeetingManager() {
        this.meetingSession = null;
        this.audioVideo = null;
        this.meetingSessionConfiguration = undefined;
        this.meetingId = null;
        this.selectedAudioOutputDevice = null;
        this.selectedAudioInputDevice = undefined;
        this.selectedVideoInputDevice = undefined;
        this.audioInputDevices = [];
        this.audioOutputDevices = [];
        this.videoInputDevices = [];
        this.activeSpeakers = [];
        this.activeSpeakerListener = null;
        this.audioVideoObservers = {};
    }
    join(meetingSessionConfiguration, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { deviceLabels, eventController, enableWebAudio, activeSpeakerPolicy, } = this.parseJoinParams(options);
            this.meetingSessionConfiguration = meetingSessionConfiguration;
            this.meetingId = this.meetingSessionConfiguration.meetingId;
            const deviceController = new amazonChimeSdkJs.DefaultDeviceController(this.logger, {
                enableWebAudio: enableWebAudio,
            });
            this.meetingSession = new amazonChimeSdkJs.DefaultMeetingSession(meetingSessionConfiguration, this.logger, deviceController, eventController);
            this.audioVideo = this.meetingSession.audioVideo;
            if (eventController) {
                eventController.addObserver(this.eventDidReceiveRef);
            }
            else {
                this.meetingSession.eventController.addObserver(this.eventDidReceiveRef);
            }
            this.setupAudioVideoObservers();
            this.setupDeviceLabelTrigger(deviceLabels);
            yield this.listAndSelectDevices(deviceLabels);
            this.publishAudioVideo();
            this.setupActiveSpeakerDetection(activeSpeakerPolicy);
            this.meetingStatus = exports.MeetingStatus.Loading;
            this.publishMeetingStatus();
        });
    }
    parseJoinParams(options) {
        const deviceLabels = (options === null || options === void 0 ? void 0 : options.deviceLabels) || exports.DeviceLabels.AudioAndVideo;
        const eventController = options === null || options === void 0 ? void 0 : options.eventController;
        const enableWebAudio = (options === null || options === void 0 ? void 0 : options.enableWebAudio) || false;
        const activeSpeakerPolicy = (options === null || options === void 0 ? void 0 : options.activeSpeakerPolicy) || new amazonChimeSdkJs.DefaultActiveSpeakerPolicy();
        return {
            deviceLabels,
            eventController,
            enableWebAudio,
            activeSpeakerPolicy,
        };
    }
    start() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            (_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.start();
        });
    }
    leave() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.audioVideo) {
                this.audioVideo.stopContentShare();
                this.audioVideo.stopLocalVideoTile();
                this.audioVideo.unbindAudioElement();
                try {
                    yield ((_a = this.meetingSession) === null || _a === void 0 ? void 0 : _a.deviceController.chooseAudioOutput(null));
                    yield ((_b = this.meetingSession) === null || _b === void 0 ? void 0 : _b.deviceController.destroy());
                }
                catch (error) {
                    console.log('MeetingManager failed to clean up media resources on leave');
                }
                if (this.activeSpeakerListener) {
                    this.audioVideo.unsubscribeFromActiveSpeakerDetector(this.activeSpeakerListener);
                }
                this.audioVideo.stop();
            }
            this.initializeMeetingManager();
            this.publishAudioVideo();
            this.publishActiveSpeaker();
        });
    }
    setupAudioVideoObservers() {
        if (!this.audioVideo) {
            return;
        }
        this.audioVideoObservers = {
            audioVideoDidStart: this.audioVideoDidStart,
            audioVideoDidStartConnecting: this.audioVideoDidStartConnecting,
            audioVideoDidStop: this.audioVideoDidStop,
        };
        this.audioVideo.addObserver(this.audioVideoObservers);
    }
    updateDeviceLists() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            this.audioInputDevices =
                (yield ((_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.listAudioInputDevices())) || [];
            this.videoInputDevices =
                (yield ((_b = this.audioVideo) === null || _b === void 0 ? void 0 : _b.listVideoInputDevices())) || [];
            this.audioOutputDevices =
                (yield ((_c = this.audioVideo) === null || _c === void 0 ? void 0 : _c.listAudioOutputDevices())) || [];
        });
    }
    setupDeviceLabelTrigger(deviceLabels = exports.DeviceLabels.AudioAndVideo) {
        var _a;
        /**
         * A builder can set device labels either using `meetingManager.join` or using `meetingManager.invokeDeviceProvider` methods.
         * Both use `setupDeviceLabelTrigger` methods, thus, set the `deviceLabels` in this method.
         */
        this.deviceLabels = deviceLabels;
        let callback;
        if (typeof deviceLabels === 'function') {
            callback = deviceLabels;
        }
        else if (deviceLabels === exports.DeviceLabels.None) {
            callback = noOpDeviceLabelHook;
        }
        else {
            const constraints = {};
            switch (deviceLabels) {
                case exports.DeviceLabels.Audio:
                    constraints.audio = true;
                    break;
                case exports.DeviceLabels.Video:
                    constraints.video = true;
                    break;
                case exports.DeviceLabels.AudioAndVideo:
                    constraints.audio = true;
                    constraints.video = true;
                    break;
            }
            callback = () => __awaiter(this, void 0, void 0, function* () {
                this.deviceLabelTriggerStatus = exports.DeviceLabelTriggerStatus.IN_PROGRESS;
                this.publishDeviceLabelTriggerStatus();
                try {
                    const devices = yield navigator.mediaDevices.enumerateDevices();
                    const hasVideoInput = devices.some((value) => value.kind === 'videoinput');
                    const stream = yield navigator.mediaDevices.getUserMedia({
                        audio: constraints.audio,
                        video: constraints.video && hasVideoInput,
                    });
                    this.deviceLabelTriggerStatus = exports.DeviceLabelTriggerStatus.GRANTED;
                    this.publishDeviceLabelTriggerStatus();
                    return stream;
                }
                catch (error) {
                    console.error('MeetingManager failed to get device permissions');
                    this.deviceLabelTriggerStatus = exports.DeviceLabelTriggerStatus.DENIED;
                    this.publishDeviceLabelTriggerStatus();
                    throw new Error(error);
                }
            });
        }
        (_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.setDeviceLabelTrigger(callback);
    }
    setupActiveSpeakerDetection(activeSpeakerPolicy) {
        var _a;
        this.publishActiveSpeaker();
        this.activeSpeakerListener = (activeSpeakers) => {
            this.activeSpeakers = activeSpeakers;
            this.activeSpeakerCallbacks.forEach((cb) => cb(activeSpeakers));
        };
        (_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.subscribeToActiveSpeakerDetector(activeSpeakerPolicy
            ? activeSpeakerPolicy
            : new amazonChimeSdkJs.DefaultActiveSpeakerPolicy(), this.activeSpeakerListener);
    }
    listAndSelectDevices(deviceLabels = exports.DeviceLabels.AudioAndVideo) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateDeviceLists();
            // If `deviceLabels` is of `DeviceLabelTrigger` type, no device will be selected.
            // In this case, you need to handle the device selection yourself.
            if (typeof deviceLabels === 'function')
                return;
            let isAudioDeviceRequested = false;
            let isVideoDeviceRequested = false;
            switch (deviceLabels) {
                case exports.DeviceLabels.None:
                    break;
                case exports.DeviceLabels.Audio:
                    isAudioDeviceRequested = true;
                    break;
                case exports.DeviceLabels.Video:
                    isVideoDeviceRequested = true;
                    break;
                case exports.DeviceLabels.AudioAndVideo:
                    isAudioDeviceRequested = true;
                    isVideoDeviceRequested = true;
                    break;
            }
            if (isAudioDeviceRequested &&
                !this.selectedAudioInputDevice &&
                this.audioInputDevices &&
                this.audioInputDevices.length) {
                this.selectedAudioInputDevice = this.audioInputDevices[0].deviceId;
                try {
                    yield ((_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.startAudioInput(this.audioInputDevices[0].deviceId));
                }
                catch (error) {
                    console.error('MeetingManager failed to select audio input device on join', error);
                }
                this.publishSelectedAudioInputDevice();
            }
            if (isAudioDeviceRequested &&
                !this.selectedAudioOutputDevice &&
                this.audioOutputDevices &&
                this.audioOutputDevices.length) {
                this.selectedAudioOutputDevice = this.audioOutputDevices[0].deviceId;
                if (new amazonChimeSdkJs.DefaultBrowserBehavior().supportsSetSinkId()) {
                    try {
                        yield ((_b = this.audioVideo) === null || _b === void 0 ? void 0 : _b.chooseAudioOutput(this.audioOutputDevices[0].deviceId));
                    }
                    catch (error) {
                        console.error('MeetingManager failed to select audio output device on join', error);
                    }
                }
                this.publishSelectedAudioOutputDevice();
            }
            if (isVideoDeviceRequested &&
                !this.selectedVideoInputDevice &&
                this.videoInputDevices &&
                this.videoInputDevices.length) {
                this.selectedVideoInputDevice = this.videoInputDevices[0].deviceId;
                this.publishSelectedVideoInputDevice();
            }
        });
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const MeetingContext = React.createContext(null);
const MeetingProvider = ({ onDeviceReplacement, meetingManager: meetingManagerProp, children, }) => {
    const logger = useLogger();
    const [meetingManager] = React.useState(() => meetingManagerProp || new MeetingManager(logger));
    return (React__default["default"].createElement(MeetingContext.Provider, { value: meetingManager },
        React__default["default"].createElement(MeetingEventProvider, null,
            React__default["default"].createElement(AudioVideoProvider, null,
                React__default["default"].createElement(DevicesProvider, { onDeviceReplacement: onDeviceReplacement },
                    React__default["default"].createElement(RosterProvider, null,
                        React__default["default"].createElement(RemoteVideoTileProvider, null,
                            React__default["default"].createElement(LocalVideoProvider, null,
                                React__default["default"].createElement(LocalAudioOutputProvider, null,
                                    React__default["default"].createElement(ContentShareProvider, null,
                                        React__default["default"].createElement(FeaturedVideoTileProvider, null, children)))))))))));
};
const useMeetingManager = () => {
    const meetingManager = React.useContext(MeetingContext);
    if (!meetingManager) {
        throw new Error('useMeetingManager must be used within MeetingProvider');
    }
    return meetingManager;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const AudioVideoContext = React.createContext(null);
const AudioVideoProvider = ({ children, }) => {
    const meetingManager = useMeetingManager();
    const [audioVideo, setAudioVideo] = React.useState(null);
    React.useEffect(() => {
        function audioVideoUpdateCb(av) {
            setAudioVideo(av);
        }
        meetingManager.subscribeToAudioVideo(audioVideoUpdateCb);
        return () => meetingManager.unsubscribeFromAudioVideo(audioVideoUpdateCb);
    }, []);
    return (React__default["default"].createElement(AudioVideoContext.Provider, { value: audioVideo }, children));
};
const useAudioVideo = () => {
    const audioVideo = React.useContext(AudioVideoContext);
    return audioVideo;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Context$1 = React.createContext(null);
const AudioInputProvider = ({ children, onDeviceReplacement, }) => {
    const logger = useLogger();
    const meetingManager = useMeetingManager();
    const audioVideo = useAudioVideo();
    const [audioInputs, setAudioInputs] = React.useState([]);
    const [selectedAudioInputDevice, setSelectedAudioInputDevice] = React.useState(meetingManager.selectedAudioInputDevice);
    const selectedInputRef = React.useRef(selectedAudioInputDevice);
    selectedInputRef.current = selectedAudioInputDevice;
    const replaceDevice = (device) => __awaiter(void 0, void 0, void 0, function* () {
        if (onDeviceReplacement) {
            return onDeviceReplacement(device, meetingManager.selectedAudioInputDevice);
        }
        return device;
    });
    React.useEffect(() => {
        meetingManager.subscribeToSelectedAudioInputDevice(setSelectedAudioInputDevice);
        return () => {
            meetingManager.unsubscribeFromSelectedAudioInputDevice(setSelectedAudioInputDevice);
        };
    }, []);
    React.useEffect(() => {
        let isMounted = true;
        const observer = {
            audioInputsChanged: (newAudioInputs) => __awaiter(void 0, void 0, void 0, function* () {
                logger.info('AudioInputProvider - audio inputs updated');
                if (meetingManager.getDeviceLabels() !== exports.DeviceLabels.Audio &&
                    meetingManager.getDeviceLabels() !== exports.DeviceLabels.AudioAndVideo) {
                    logger.info('Device labels do not allow audio, skipping audio input selection on audioInputsChanged');
                    return;
                }
                const hasSelectedDevice = newAudioInputs.some((device) => device.deviceId === selectedInputRef.current);
                let nextInput = 'default';
                if (selectedInputRef.current &&
                    !hasSelectedDevice &&
                    newAudioInputs.length) {
                    logger.info('Previously selected audio input lost. Selecting a default device.');
                    nextInput = newAudioInputs[0].deviceId;
                    // Safari and Firefox don't have this "default" as device Id
                    // Only Chrome have this "default" device
                }
                else if (selectedInputRef.current === 'default') {
                    logger.info(`Audio devices updated and "default" device is selected. Reselecting input.`);
                }
                const nextDevice = yield replaceDevice(nextInput);
                try {
                    yield meetingManager.startAudioInputDevice(nextDevice);
                }
                catch (e) {
                    logger.error(`Failed to select audio input device on audioInputsChanged: ${e}`);
                }
                setAudioInputs(newAudioInputs);
            }),
        };
        function initAudioInput() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!audioVideo) {
                    return;
                }
                const devices = yield audioVideo.listAudioInputDevices();
                if (isMounted) {
                    setAudioInputs(devices);
                    audioVideo.addDeviceChangeObserver(observer);
                }
            });
        }
        const callback = () => {
            initAudioInput();
        };
        meetingManager.subscribeToDeviceLabelTrigger(callback);
        initAudioInput();
        return () => {
            isMounted = false;
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.removeDeviceChangeObserver(observer);
            meetingManager.unsubscribeFromDeviceLabelTrigger(callback);
        };
    }, [audioVideo, onDeviceReplacement]);
    const contextValue = React.useMemo(() => ({
        devices: audioInputs,
        selectedDevice: selectedAudioInputDevice,
    }), [audioInputs, selectedAudioInputDevice]);
    return React__default["default"].createElement(Context$1.Provider, { value: contextValue }, children);
};
const useAudioInputs = () => {
    const context = React.useContext(Context$1);
    if (!context) {
        throw new Error('useAudioInputs must be used within AudioInputProvider');
    }
    return context;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const AudioOutputContext = React.createContext(null);
const AudioOutputProvider = ({ children }) => {
    const logger = useLogger();
    const audioVideo = useAudioVideo();
    const [audioOutputs, setAudioOutputs] = React.useState([]);
    const meetingManager = useMeetingManager();
    const [selectedAudioOutputDevice, setSelectedAudioOutputDevice] = React.useState(meetingManager.selectedAudioOutputDevice);
    React.useEffect(() => {
        meetingManager.subscribeToSelectedAudioOutputDevice(setSelectedAudioOutputDevice);
        return () => {
            meetingManager.unsubscribeFromSelectedAudioOutputDevice(setSelectedAudioOutputDevice);
        };
    }, []);
    React.useEffect(() => {
        let isMounted = true;
        const observer = {
            audioOutputsChanged: (newAudioOutputs) => {
                logger.info('AudioOutputProvider - audio outputs updated');
                setAudioOutputs(newAudioOutputs);
            },
        };
        function initAudioOutput() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!audioVideo) {
                    return;
                }
                const devices = yield audioVideo.listAudioOutputDevices();
                if (isMounted) {
                    setAudioOutputs(devices);
                    audioVideo.addDeviceChangeObserver(observer);
                }
            });
        }
        const callback = () => {
            initAudioOutput();
        };
        meetingManager.subscribeToDeviceLabelTrigger(callback);
        initAudioOutput();
        return () => {
            isMounted = false;
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.removeDeviceChangeObserver(observer);
            meetingManager.unsubscribeFromDeviceLabelTrigger(callback);
        };
    }, [audioVideo]);
    const contextValue = React.useMemo(() => ({
        devices: audioOutputs,
        selectedDevice: selectedAudioOutputDevice,
    }), [audioOutputs, selectedAudioOutputDevice]);
    return (React__default["default"].createElement(AudioOutputContext.Provider, { value: contextValue }, children));
};
const useAudioOutputs = () => {
    const context = React.useContext(AudioOutputContext);
    if (!context) {
        throw new Error('useAudioOutputs must be used within AudioOutputProvider');
    }
    return context;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const Context = React.createContext(null);
const VideoInputProvider = ({ children, }) => {
    const logger = useLogger();
    const audioVideo = useAudioVideo();
    const [videoInputs, setVideoInputs] = React.useState([]);
    const meetingManager = useMeetingManager();
    const [selectedVideoInputDevice, setSelectedVideoInputDevice] = React.useState(meetingManager.selectedVideoInputDevice);
    React.useEffect(() => {
        meetingManager.subscribeToSelectedVideoInputDevice(setSelectedVideoInputDevice);
        return () => {
            meetingManager.unsubscribeFromSelectedVideoInputDevice(setSelectedVideoInputDevice);
        };
    }, []);
    React.useEffect(() => {
        let isMounted = true;
        const observer = {
            videoInputsChanged: (newVideoInputs) => {
                logger.info('VideoInputProvider - video inputs updated');
                setVideoInputs(newVideoInputs);
            },
        };
        function initVideoInput() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!audioVideo) {
                    return;
                }
                const devices = yield audioVideo.listVideoInputDevices();
                if (isMounted) {
                    setVideoInputs(devices);
                    audioVideo.addDeviceChangeObserver(observer);
                }
            });
        }
        const callback = () => {
            initVideoInput();
        };
        meetingManager.subscribeToDeviceLabelTrigger(callback);
        initVideoInput();
        return () => {
            isMounted = false;
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.removeDeviceChangeObserver(observer);
            meetingManager.unsubscribeFromDeviceLabelTrigger(callback);
        };
    }, [audioVideo]);
    const contextValue = React.useMemo(() => ({
        devices: videoInputs,
        selectedDevice: selectedVideoInputDevice,
    }), [videoInputs, selectedVideoInputDevice]);
    return React__default["default"].createElement(Context.Provider, { value: contextValue }, children);
};
const useVideoInputs = () => {
    const context = React.useContext(Context);
    if (!context) {
        throw new Error('useVideoInputs must be used within VideoInputProvider');
    }
    return context;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const DevicesProvider = ({ children, onDeviceReplacement, }) => (React__default["default"].createElement(AudioInputProvider, { onDeviceReplacement: onDeviceReplacement },
    React__default["default"].createElement(AudioOutputProvider, null,
        React__default["default"].createElement(VideoInputProvider, null, children))));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const isOptionActive = (selectedDevice, currentDeviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const selectedDeviceId = yield getDeviceId(selectedDevice);
    return selectedDeviceId === currentDeviceId;
});
const getDeviceId = (device) => __awaiter(void 0, void 0, void 0, function* () {
    if (!device) {
        return '';
    }
    let intrinsicDevice;
    if (amazonChimeSdkJs.isAudioTransformDevice(device) || amazonChimeSdkJs.isVideoTransformDevice(device)) {
        intrinsicDevice = yield device.intrinsicDevice();
    }
    else {
        intrinsicDevice = device;
    }
    const deviceId = amazonChimeSdkJs.DefaultDeviceController.getIntrinsicDeviceId(intrinsicDevice);
    return deviceId;
});
function isPrevNextUndefined(prev, next) {
    const isPrevUndefined = prev === undefined;
    const isNextUndefined = next === undefined;
    return isPrevUndefined && isNextUndefined;
}
function isPrevNextEmpty(prev, next) {
    const isPrevEmpty = prev && Object.keys(prev).length === 0;
    const isNextEmpty = next && Object.keys(next).length === 0;
    return isPrevEmpty && isNextEmpty;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const DeviceInput = (_a) => {
    var { onChange, label, devices, selectedDevice, notFoundMsg } = _a, rest = __rest(_a, ["onChange", "label", "devices", "selectedDevice", "notFoundMsg"]);
    const [selectedDeviceId, setSelectedDeviceId] = React.useState('');
    React.useEffect(() => {
        const getSelectedDeviceId = () => __awaiter(void 0, void 0, void 0, function* () {
            const selectedDeviceId = yield getDeviceId(selectedDevice);
            setSelectedDeviceId(selectedDeviceId);
        });
        getSelectedDeviceId();
    }, [selectedDevice]);
    const deviceList = devices.map((device) => ({
        value: device.deviceId,
        label: device.label,
    }));
    const options = deviceList.length
        ? deviceList
        : [{ value: 'not-available', label: notFoundMsg }];
    const selectDevice = (e) => {
        const deviceId = e.target.value;
        if (deviceId === 'not-available') {
            return;
        }
        onChange(deviceId);
    };
    return (React__default["default"].createElement(FormField, Object.assign({ field: Select, options: options, onChange: selectDevice, value: selectedDeviceId, label: label }, rest)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const CameraSelection = (_a) => {
    var { notFoundMsg = 'No camera devices found', label = 'Camera source' } = _a, rest = __rest(_a, ["notFoundMsg", "label"]);
    const logger = useLogger();
    const { devices, selectedDevice } = useVideoInputs();
    const meetingManager = useMeetingManager();
    const handleSelect = (deviceId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield meetingManager.startVideoInputDevice(deviceId);
        }
        catch (error) {
            logger.error('CameraSelection failed to select camera');
        }
    });
    return (React__default["default"].createElement(DeviceInput, Object.assign({ label: label, onChange: handleSelect, devices: devices, selectedDevice: selectedDevice, notFoundMsg: notFoundMsg }, rest)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useMemoCompare(next, compare) {
    const previousRef = React.useRef();
    const previous = previousRef.current;
    const isEqual = compare(previous, next);
    React.useEffect(() => {
        if (!isEqual) {
            previousRef.current = next;
        }
    });
    return isEqual ? previous : next;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const BackgroundBlurProviderContext = React.createContext(undefined);
const BackgroundBlurProvider = ({ spec, options, children, }) => {
    const logger = useLogger();
    const [isBackgroundBlurSupported, setIsBackgroundBlurSupported] = React.useState(undefined);
    const [backgroundBlurProcessor, setBackgroundBlurProcessor] = React.useState();
    const blurSpec = useMemoCompare(spec, (prev, next) => {
        if (Object.is(prev, next)) {
            return true;
        }
        return false;
    });
    const blurOptions = useMemoCompare(options, (prev, next) => {
        if (isPrevNextUndefined(prev, next) || isPrevNextEmpty(prev, next)) {
            return true;
        }
        if ((prev === null || prev === void 0 ? void 0 : prev.filterCPUUtilization) !== (next === null || next === void 0 ? void 0 : next.filterCPUUtilization) ||
            (prev === null || prev === void 0 ? void 0 : prev.blurStrength) !== (next === null || next === void 0 ? void 0 : next.blurStrength) ||
            (prev === null || prev === void 0 ? void 0 : prev.logger) !== (next === null || next === void 0 ? void 0 : next.logger) ||
            (prev === null || prev === void 0 ? void 0 : prev.reportingPeriodMillis) !== (next === null || next === void 0 ? void 0 : next.reportingPeriodMillis)) {
            return false;
        }
        return true;
    });
    React.useEffect(() => {
        // One reason we need to initialize first, even though we'll destroy this background blur processor when we create a new device
        // is because we need to check if background blur is supported by initializing the background blur processor to see if the browser supports
        initializeBackgroundBlur();
        return () => {
            logger.info('Specs or options were changed. Destroying and re-initializing background blur processor.');
            backgroundBlurProcessor === null || backgroundBlurProcessor === void 0 ? void 0 : backgroundBlurProcessor.destroy();
        };
    }, [blurOptions, blurSpec]);
    function initializeBackgroundBlur() {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info(`Initializing background blur processor with, spec: ${JSON.stringify(spec)}, options: ${JSON.stringify(options)}`);
            try {
                const createdProcessor = yield amazonChimeSdkJs.BackgroundBlurVideoFrameProcessor.create(Object.assign({}, spec), Object.assign({}, options));
                // BackgroundBlurVideoFrameProcessor.create will return a NoOpVideoFrameProcessor
                // in the case that BackgroundBlurVideoFrameProcessor.isSupported() returns false.
                // BackgroundBlurVideoFrameProcessor.create() can also throw an error in case loading
                // the assets are not fetched successfully.
                if (createdProcessor instanceof amazonChimeSdkJs.NoOpVideoFrameProcessor) {
                    logger.warn('Initialized NoOpVideoFrameProcessor');
                    setBackgroundBlurProcessor(undefined);
                    setIsBackgroundBlurSupported(false);
                    return undefined;
                }
                else {
                    logger.info(`Initialized background blur processor: ${JSON.stringify(createdProcessor)}`);
                    setBackgroundBlurProcessor(createdProcessor);
                    setIsBackgroundBlurSupported(true);
                    return createdProcessor;
                }
            }
            catch (error) {
                logger.error(`Error creating a background blur video frame processor device ${error}`);
                setBackgroundBlurProcessor(undefined);
                setIsBackgroundBlurSupported(false);
                return undefined;
            }
        });
    }
    const createBackgroundBlurDevice = (selectedDevice) => __awaiter(void 0, void 0, void 0, function* () {
        logger.info(`Calling createBackgroundBlurDevice with device: ${JSON.stringify(selectedDevice)}`);
        const currentProcessor = yield initializeBackgroundBlur();
        try {
            const logger = (options === null || options === void 0 ? void 0 : options.logger) ||
                new amazonChimeSdkJs.ConsoleLogger('BackgroundBlurProvider', amazonChimeSdkJs.LogLevel.INFO);
            if (currentProcessor) {
                const chosenVideoTransformDevice = new amazonChimeSdkJs.DefaultVideoTransformDevice(logger, selectedDevice, [currentProcessor]);
                return chosenVideoTransformDevice;
            }
            else {
                throw new Error('Processor has not been created. Background Blur is not supported.');
            }
        }
        catch (error) {
            throw new Error(`Failed to create a DefaultVideoTransformDevice: ${error}`);
        }
    });
    const value = {
        createBackgroundBlurDevice,
        isBackgroundBlurSupported,
        backgroundBlurProcessor,
    };
    return (React__default["default"].createElement(BackgroundBlurProviderContext.Provider, { value: value }, children));
};
const useBackgroundBlur = () => {
    const context = React.useContext(BackgroundBlurProviderContext);
    if (!context) {
        throw new Error('useBackgroundBlur must be used within BackgroundBlurProvider');
    }
    return context;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const BackgroundBlurCheckbox = (_a) => {
    var { label = 'Blur my background' } = _a, rest = __rest(_a, ["label"]);
    const logger = useLogger();
    const { isBackgroundBlurSupported, createBackgroundBlurDevice } = useBackgroundBlur();
    const [isLoading, setIsLoading] = React.useState(false);
    const { selectedDevice } = useVideoInputs();
    const meetingManager = useMeetingManager();
    const toggleBackgroundBlur = () => __awaiter(void 0, void 0, void 0, function* () {
        if (isLoading || !selectedDevice) {
            return;
        }
        try {
            setIsLoading(true);
            let current;
            if (!amazonChimeSdkJs.isVideoTransformDevice(selectedDevice)) {
                if (!isBackgroundBlurSupported) {
                    logger.warn('Background blur processor is not supported yet.');
                    return;
                }
                current = yield createBackgroundBlurDevice(selectedDevice);
                logger.info(`Video filter turned on - selecting video transform device: ${JSON.stringify(current)}`);
            }
            else {
                current = yield selectedDevice.intrinsicDevice();
                logger.info(`Video filter was turned off - selecting inner device: ${JSON.stringify(current)}`);
            }
            yield meetingManager.startVideoInputDevice(current);
        }
        catch (error) {
            logger.error('Failed to toggle Background Blur');
        }
        finally {
            setIsLoading(false);
        }
    });
    return (React__default["default"].createElement(FormField, Object.assign({ field: Checkbox, onChange: toggleBackgroundBlur, value: 'Background Blur', checked: amazonChimeSdkJs.isVideoTransformDevice(selectedDevice), label: label }, rest)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useSelectVideoQuality() {
    const audioVideo = useAudioVideo();
    const logger = useLogger();
    const selectVideoQuality = React.useCallback((quality) => {
        if (!audioVideo) {
            return;
        }
        logger.info(`Selecting video quality: ${quality}`);
        switch (quality) {
            case '360p':
                audioVideo.chooseVideoInputQuality(640, 360, 15);
                audioVideo.setVideoMaxBandwidthKbps(600);
                break;
            case '540p':
                audioVideo.chooseVideoInputQuality(960, 540, 15);
                audioVideo.setVideoMaxBandwidthKbps(1400);
                break;
            case '720p':
                audioVideo.chooseVideoInputQuality(1280, 720, 15);
                audioVideo.setVideoMaxBandwidthKbps(1400);
                break;
            default:
                logger.warn(`Unsupported video quality: ${quality}`);
        }
    }, [audioVideo]);
    return selectVideoQuality;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const QualitySelection = (_a) => {
    var { label = 'Video quality', labelForUnselected = 'Select video quality' } = _a, rest = __rest(_a, ["label", "labelForUnselected"]);
    const selectVideoQuality = useSelectVideoQuality();
    const [videoQuality, setVideoQuality] = React.useState('unselected');
    const qualityOptions = [
        {
            label: labelForUnselected,
            value: 'unselected',
        },
        {
            label: VIDEO_INPUT_QUALITY['720p'],
            value: '720p',
        },
        {
            label: VIDEO_INPUT_QUALITY['540p'],
            value: '540p',
        },
        {
            label: VIDEO_INPUT_QUALITY['360p'],
            value: '360p',
        },
    ];
    function selectQuality(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const quality = e.target.value;
            setVideoQuality(quality);
            selectVideoQuality(quality);
        });
    }
    return (React__default["default"].createElement(FormField, Object.assign({ field: Select, options: qualityOptions, onChange: selectQuality, value: videoQuality, label: label }, rest)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const MicSelection = (_a) => {
    var { notFoundMsg = 'No microphone devices found', label = 'Microphone source' } = _a, rest = __rest(_a, ["notFoundMsg", "label"]);
    const logger = useLogger();
    const { devices, selectedDevice } = useAudioInputs();
    const meetingManager = useMeetingManager();
    const handleSelect = (deviceId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield meetingManager.startAudioInputDevice(deviceId);
        }
        catch (error) {
            logger.error('MicSelection failed to select mic');
        }
    });
    return (React__default["default"].createElement(DeviceInput, Object.assign({ label: label, onChange: handleSelect, devices: devices, selectedDevice: selectedDevice, notFoundMsg: notFoundMsg }, rest)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const SpeakerSelection = (_a) => {
    var { notFoundMsg = 'No speaker devices found', label = 'Speaker source', onChange } = _a, rest = __rest(_a, ["notFoundMsg", "label", "onChange"]);
    const logger = useLogger();
    const { devices, selectedDevice } = useAudioOutputs();
    const meetingManager = useMeetingManager();
    const handleSelect = (deviceId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield meetingManager.startAudioOutputDevice(deviceId);
            onChange && onChange(deviceId);
        }
        catch (error) {
            logger.error('SpeakerSelection failed to select speaker');
        }
    });
    return (React__default["default"].createElement(DeviceInput, Object.assign({ label: label, devices: devices, onChange: handleSelect, selectedDevice: selectedDevice, notFoundMsg: notFoundMsg }, rest)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useToggleLocalMute() {
    const audioVideo = useAudioVideo();
    const [muted, setMuted] = React.useState(() => (audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeIsLocalAudioMuted()) || false);
    React.useEffect(() => {
        const muteUnmutecallback = (localMuted) => {
            setMuted(localMuted);
        };
        audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeSubscribeToMuteAndUnmuteLocalAudio(muteUnmutecallback);
        setMuted((audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeIsLocalAudioMuted()) || false);
        return () => {
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeUnsubscribeToMuteAndUnmuteLocalAudio(muteUnmutecallback);
        };
    }, [audioVideo]);
    const toggleMute = React.useCallback(() => {
        if (muted) {
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeUnmuteLocalAudio();
        }
        else {
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeMuteLocalAudio();
        }
    }, [muted, audioVideo]);
    return { muted, toggleMute };
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const AudioInputControl = (_a) => {
    var { muteLabel = 'Mute', unmuteLabel = 'Unmute', mutedIconTitle, unmutedIconTitle } = _a, rest = __rest(_a, ["muteLabel", "unmuteLabel", "mutedIconTitle", "unmutedIconTitle"]);
    const logger = useLogger();
    const meetingManager = useMeetingManager();
    const { muted, toggleMute } = useToggleLocalMute();
    const { devices, selectedDevice } = useAudioInputs();
    const [dropdownOptions, setDropdownOptions] = React.useState([]);
    React.useEffect(() => {
        const handleClick = (deviceId) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield meetingManager.startAudioInputDevice(deviceId);
            }
            catch (error) {
                logger.error('AudioInputControl failed to select audio input device');
            }
        });
        const getDropdownOptions = () => __awaiter(void 0, void 0, void 0, function* () {
            const dropdownOptions = yield Promise.all(devices.map((device) => __awaiter(void 0, void 0, void 0, function* () {
                return ({
                    children: React__default["default"].createElement("span", null, device.label),
                    checked: yield isOptionActive(selectedDevice, device.deviceId),
                    onClick: () => __awaiter(void 0, void 0, void 0, function* () { return yield handleClick(device.deviceId); }),
                });
            })));
            setDropdownOptions(dropdownOptions);
        });
        getDropdownOptions();
    }, [
        devices,
        selectedDevice,
        meetingManager,
        meetingManager.startAudioInputDevice,
    ]);
    return (React__default["default"].createElement(ControlBarButton, Object.assign({ icon: React__default["default"].createElement(Microphone, { muted: muted, mutedTitle: mutedIconTitle, unmutedTitle: unmutedIconTitle }), onClick: toggleMute, label: muted ? unmuteLabel : muteLabel, popOver: dropdownOptions }, rest)));
};

var lodash_isequal = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
});

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const VoiceFocusContext = React.createContext(null);
const VoiceFocusProvider = ({ spec, options, createMeetingResponse, children, }) => {
    const logger = useLogger();
    const [isVoiceFocusSupported, setIsVoiceFocusSupported] = React.useState(undefined);
    const [voiceFocusDevice, setVoiceFocusDevice] = React.useState(null);
    const [voiceFocusTransformer, setVoiceFocusTransformer] = React.useState(null);
    // Make sure that minor changes to the spec don't result in recomputation:
    // Any value of `{}` and undefined are all considered the same.
    const vfSpec = useMemoCompare(spec, (prev, next) => {
        if (Object.is(prev, next) ||
            JSON.stringify(prev) === JSON.stringify(next)) {
            return true;
        }
        // Either prev is undefined and next is the empty object, or
        // next is undefined and prev is the empty object, or they are
        // both the empty object.
        const isPrevEmpty = prev === undefined || (prev && Object.keys(prev).length === 0);
        const isNextEmpty = next === undefined || (next && Object.keys(next).length === 0);
        if (isPrevEmpty && isNextEmpty) {
            return true;
        }
        // They are a richer objects, and we won't try to compare them.
        return false;
    });
    const addVoiceFocus = (device) => __awaiter(void 0, void 0, void 0, function* () {
        logger.info(`Add Amazon Voice Focus to the following audio input device ${device}`);
        // TODO: We don't need to intialize a new transformer every time we create a voice focus transformer device
        // We could potentially check for if a transformer exists already AND that the voiceFocusDevice exists and hasnt been stopped.
        // If both of those statements are true, then chooseNewInnerDevice instead of creating a new processor
        if (!isVoiceFocusSupported) {
            logger.debug('Not supported, not creating device.');
            return device;
        }
        try {
            const transformer = yield getVoiceFocusDeviceTransformer();
            const vf = yield (transformer === null || transformer === void 0 ? void 0 : transformer.createTransformDevice(device));
            if (vf) {
                logger.info('Created a new Amazon Voice Focus transform device.');
                setVoiceFocusDevice(vf);
                return vf;
            }
        }
        catch (e) {
            logger.error(`Amazon Voice Focus is not supported. ${e}`);
        }
        return device;
    });
    let currentPromise;
    /**
     * We use currentPromise to store the latest promise of VoiceFocusDeviceTransformer.
     * If the builder changes the spec or options when the previous promise is still pending,
     * We will just grab the latest settings to create an Amazon Voice Focus transformer.
     * This function will always return the most recent promise.
     */
    function getVoiceFocusDeviceTransformer() {
        return __awaiter(this, void 0, void 0, function* () {
            if (voiceFocusTransformer) {
                return voiceFocusTransformer;
            }
            // This should only be hit if `isVoiceFocusSupported` was true at some point,
            // but the transformer is now missing, which means we are updating the transformer.
            return currentPromise;
        });
    }
    function createVoiceFocusDeviceTransformer(spec, options, canceled, createMeetingResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetch = amazonChimeSdkJs.VoiceFocusDeviceTransformer.create(spec, options, undefined, createMeetingResponse);
            fetch
                .then((transformer) => {
                // A different request arrived afterwards. Drop this one on the floor
                // using the cancellation mechanism of `useEffect`.
                if (canceled()) {
                    return;
                }
                currentPromise = undefined;
                setVoiceFocusTransformer(transformer);
                setVoiceFocusDevice(null);
                setIsVoiceFocusSupported(transformer && transformer.isSupported());
            })
                .catch(() => {
                if (canceled()) {
                    return;
                }
                currentPromise = undefined;
                setVoiceFocusTransformer(null);
                setVoiceFocusDevice(null);
                setIsVoiceFocusSupported(false);
            });
            return (currentPromise = fetch);
        });
    }
    function initVoiceFocus(vfSpec, options, canceled, createMeetingResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            // Throw away the old one and reinitialize.
            voiceFocusDevice === null || voiceFocusDevice === void 0 ? void 0 : voiceFocusDevice.stop();
            if (voiceFocusTransformer) {
                amazonChimeSdkJs.VoiceFocusDeviceTransformer.destroyVoiceFocus(voiceFocusTransformer);
            }
            setVoiceFocusTransformer(null);
            setVoiceFocusDevice(null);
            createVoiceFocusDeviceTransformer(vfSpec, options, canceled, createMeetingResponse);
        });
    }
    React.useEffect(() => {
        let canceled = false;
        if (createMeetingResponse) {
            initVoiceFocus(vfSpec, options, () => canceled, createMeetingResponse);
        }
        return () => {
            canceled = true;
        };
    }, [vfSpec, options, createMeetingResponse]);
    React.useEffect(() => {
        if (isVoiceFocusSupported === undefined) {
            return;
        }
        if (isVoiceFocusSupported) {
            logger.info('Amazon Voice Focus is supported.');
        }
        else {
            logger.warn('Amazon Voice Focus is not supported.');
        }
    }, [isVoiceFocusSupported]);
    React.useEffect(() => {
        if (voiceFocusDevice) {
            logger.info(`Current Amazon Voice Focus transform device: ${voiceFocusDevice}`);
        }
        return () => {
            if (voiceFocusDevice) {
                logger.info('Destroying voice focus device : ' + JSON.stringify(voiceFocusDevice));
                voiceFocusDevice === null || voiceFocusDevice === void 0 ? void 0 : voiceFocusDevice.stop();
            }
            else {
                logger.info("Voice focus device doesn't exist");
            }
        };
    }, [voiceFocusDevice]);
    React.useEffect(() => {
        return () => {
            if (voiceFocusTransformer) {
                amazonChimeSdkJs.VoiceFocusDeviceTransformer.destroyVoiceFocus(voiceFocusTransformer);
                logger.info('Destroying voice focus transformer : ' +
                    JSON.stringify(voiceFocusTransformer));
            }
            else {
                logger.info("VoiceFocusTransformer doesn't exist");
            }
        };
    }, [voiceFocusTransformer]);
    const value = {
        isVoiceFocusSupported,
        addVoiceFocus,
    };
    return (React__default["default"].createElement(VoiceFocusContext.Provider, { value: value }, children));
};
const useVoiceFocus = () => {
    const context = React.useContext(VoiceFocusContext);
    if (!context) {
        throw new Error('useVoiceFocus must be used within VoiceFocusProvider');
    }
    return context;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const AudioInputVFControl = (_a) => {
    var { muteLabel = 'Mute', unmuteLabel = 'Unmute', mutedIconTitle, unmutedIconTitle, voiceFocusOnLabel = 'Amazon Voice Focus enabled', voiceFocusOffLabel = 'Enable Amazon Voice Focus' } = _a, rest = __rest(_a, ["muteLabel", "unmuteLabel", "mutedIconTitle", "unmutedIconTitle", "voiceFocusOnLabel", "voiceFocusOffLabel"]);
    const logger = useLogger();
    const audioVideo = useAudioVideo();
    const meetingManager = useMeetingManager();
    const [isLoading, setIsLoading] = React.useState(false);
    // When the user click on Amazon Voice Focus option, the state will change.
    const [isVoiceFocusChecked, setIsVoiceFocusChecked] = React.useState(false);
    // Only when the current input audio device is an Amazon Voice Focus device,
    // the state will be true. Otherwise, it will be false.
    const [isVoiceFocusEnabled, setIsVoiceFocusEnabled] = React.useState(false);
    const [dropdownWithVFOptions, setDropdownWithVFOptions] = React.useState(null);
    const { muted, toggleMute } = useToggleLocalMute();
    const { isVoiceFocusSupported, addVoiceFocus } = useVoiceFocus();
    const { devices, selectedDevice } = useAudioInputs();
    const audioInputDevices = useMemoCompare(devices, (prev, next) => {
        return lodash_isequal(prev, next);
    });
    React.useEffect(() => {
        logger.info(`Amazon Voice Focus is ${isVoiceFocusEnabled ? 'enabled' : 'disabled'}.`);
    }, [isVoiceFocusEnabled]);
    React.useEffect(() => {
        // Only when the current input audio device is an Amazon Voice Focus transform device,
        // Amazon Voice Focus button will be checked.
        if (selectedDevice instanceof amazonChimeSdkJs.VoiceFocusTransformDevice) {
            setIsVoiceFocusEnabled(true);
        }
        else {
            setIsVoiceFocusEnabled(false);
        }
        return () => {
            if (selectedDevice instanceof amazonChimeSdkJs.VoiceFocusTransformDevice) {
                selectedDevice.stop();
            }
        };
    }, [selectedDevice]);
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        if (selectedDevice instanceof amazonChimeSdkJs.VoiceFocusTransformDevice &&
            isVoiceFocusEnabled) {
            selectedDevice.observeMeetingAudio(audioVideo);
        }
    }, [audioVideo, isVoiceFocusEnabled, selectedDevice]);
    React.useEffect(() => {
        const handleClick = (deviceId) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (isVoiceFocusChecked && !isLoading) {
                    setIsLoading(true);
                    const receivedDevice = deviceId;
                    const currentDevice = yield addVoiceFocus(receivedDevice);
                    yield meetingManager.startAudioInputDevice(currentDevice);
                }
                else {
                    yield meetingManager.startAudioInputDevice(deviceId);
                }
            }
            catch (error) {
                logger.error('AudioInputVFControl failed to select audio input device');
            }
            finally {
                setIsLoading(false);
            }
        });
        const getDropdownWithVFOptions = () => __awaiter(void 0, void 0, void 0, function* () {
            const dropdownOptions = yield Promise.all(audioInputDevices.map((device) => __awaiter(void 0, void 0, void 0, function* () {
                return (React__default["default"].createElement(PopOverItem, { key: device.deviceId, checked: yield isOptionActive(selectedDevice, device.deviceId), onClick: () => __awaiter(void 0, void 0, void 0, function* () { return yield handleClick(device.deviceId); }) },
                    React__default["default"].createElement("span", null, device.label)));
            })));
            if (isVoiceFocusSupported) {
                const vfOption = (React__default["default"].createElement(PopOverItem, { key: "voicefocus", checked: isVoiceFocusEnabled, disabled: isLoading, onClick: () => {
                        setIsLoading(true);
                        setIsVoiceFocusChecked((current) => !current);
                    } },
                    React__default["default"].createElement(React__default["default"].Fragment, null,
                        isLoading && React__default["default"].createElement(Spinner, { width: "1.5rem", height: "1.5rem" }),
                        isVoiceFocusEnabled ? voiceFocusOnLabel : voiceFocusOffLabel)));
                dropdownOptions === null || dropdownOptions === void 0 ? void 0 : dropdownOptions.push(React__default["default"].createElement(PopOverSeparator, { key: "separator" }));
                dropdownOptions === null || dropdownOptions === void 0 ? void 0 : dropdownOptions.push(vfOption);
            }
            setDropdownWithVFOptions(dropdownOptions);
        });
        getDropdownWithVFOptions();
    }, [
        // The contents of this dropdown depends, of course, on the current selected device,
        // but also on the Voice Focus state, including `addVoiceFocus` which is used inside
        // the click handler.
        addVoiceFocus,
        meetingManager,
        meetingManager.startAudioInputDevice,
        audioInputDevices,
        isLoading,
        isVoiceFocusEnabled,
        isVoiceFocusChecked,
        isVoiceFocusSupported,
        selectedDevice,
    ]);
    React.useEffect(() => {
        const onVFCheckboxChange = () => __awaiter(void 0, void 0, void 0, function* () {
            if (!selectedDevice) {
                return;
            }
            try {
                let current = selectedDevice;
                if (isVoiceFocusChecked) {
                    logger.info('User turned on Amazon Voice Focus.');
                    if (typeof selectedDevice === 'string') {
                        current = yield addVoiceFocus(selectedDevice);
                    }
                }
                else {
                    logger.info('Amazon Voice Focus is off by default or user turned off Amazon Voice Focus.');
                    if (selectedDevice instanceof amazonChimeSdkJs.VoiceFocusTransformDevice) {
                        current = selectedDevice.getInnerDevice();
                    }
                }
                yield meetingManager.startAudioInputDevice(current);
            }
            catch (error) {
                logger.error('AudioInputVFControl failed to select audio input device onVFCheckboxChange change');
            }
            setIsLoading(false);
        });
        onVFCheckboxChange();
    }, [isVoiceFocusChecked]);
    return (React__default["default"].createElement(ControlBarButton, Object.assign({ icon: React__default["default"].createElement(Microphone, { muted: muted, mutedTitle: mutedIconTitle, unmutedTitle: unmutedIconTitle }), onClick: toggleMute, label: muted ? unmuteLabel : muteLabel }, rest), dropdownWithVFOptions));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const AudioOutputControl = (_a) => {
    var { label = 'Speaker' } = _a, rest = __rest(_a, ["label"]);
    const logger = useLogger();
    const meetingManager = useMeetingManager();
    const { devices, selectedDevice } = useAudioOutputs();
    const { isAudioOn, toggleAudio } = useLocalAudioOutput();
    const [dropdownOptions, setDropdownOptions] = React.useState([]);
    React.useEffect(() => {
        const handleClick = (deviceId) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (new amazonChimeSdkJs.DefaultBrowserBehavior().supportsSetSinkId()) {
                    yield meetingManager.startAudioOutputDevice(deviceId);
                }
                else {
                    logger.error('AudioOutputControl cannot select audio output device because browser does not support setSinkId operation.');
                }
            }
            catch (error) {
                logger.error('AudioOutputControl failed to select audio output device');
            }
        });
        const getDropdownOptions = () => __awaiter(void 0, void 0, void 0, function* () {
            const dropdownOptions = yield Promise.all(devices.map((device) => __awaiter(void 0, void 0, void 0, function* () {
                return ({
                    children: React__default["default"].createElement("span", null, device.label),
                    checked: yield isOptionActive(selectedDevice, device.deviceId),
                    onClick: () => __awaiter(void 0, void 0, void 0, function* () { return yield handleClick(device.deviceId); }),
                });
            })));
            setDropdownOptions(dropdownOptions);
        });
        getDropdownOptions();
    }, [
        devices,
        selectedDevice,
        meetingManager,
        meetingManager.startAudioOutputDevice,
    ]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ControlBarButton, Object.assign({ icon: React__default["default"].createElement(Sound, { disabled: !isAudioOn }), onClick: toggleAudio, label: label, popOver: dropdownOptions.length ? dropdownOptions : null }, rest))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ContentShareControl = (_a) => {
    var { label = 'Content', pauseLabel = 'Pause', unpauseLabel = 'Unpause', iconTitle } = _a, rest = __rest(_a, ["label", "pauseLabel", "unpauseLabel", "iconTitle"]);
    const { isLocalUserSharing } = useContentShareState();
    const { paused, toggleContentShare, togglePauseContentShare } = useContentShareControls();
    const dropdownOptions = [
        {
            children: React__default["default"].createElement("span", null, paused ? unpauseLabel : pauseLabel),
            onClick: togglePauseContentShare,
        },
    ];
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ControlBarButton, Object.assign({ icon: React__default["default"].createElement(ScreenShare, { title: iconTitle }), onClick: toggleContentShare, label: label, popOver: isLocalUserSharing ? dropdownOptions : null }, rest))));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const VideoInputBackgroundBlurControl = (_a) => {
    var { label = 'Video', backgroundBlurLabel = 'Enable Background Blur' } = _a, rest = __rest(_a, ["label", "backgroundBlurLabel"]);
    const logger = useLogger();
    const meetingManager = useMeetingManager();
    const { devices, selectedDevice } = useVideoInputs();
    const { isVideoEnabled, toggleVideo } = useLocalVideo();
    const { isBackgroundBlurSupported, createBackgroundBlurDevice } = useBackgroundBlur();
    const [isLoading, setIsLoading] = React.useState(false);
    const [dropdownWithVideoTransformOptions, setDropdownWithVideoTransformOptions,] = React.useState(null);
    const videoDevices = useMemoCompare(devices, (prev, next) => lodash_isequal(prev, next));
    const toggleBackgroundBlur = () => __awaiter(void 0, void 0, void 0, function* () {
        if (isLoading || !selectedDevice) {
            return;
        }
        try {
            setIsLoading(true);
            let current;
            if (!amazonChimeSdkJs.isVideoTransformDevice(selectedDevice)) {
                // Enable video transform on the non-transformed device
                current = yield createBackgroundBlurDevice(selectedDevice);
                logger.info(`Video filter turned on - selecting video transform device: ${JSON.stringify(current)}`);
            }
            else {
                // switch back to the inner device
                current = yield selectedDevice.intrinsicDevice();
                logger.info(`Video filter was turned off - selecting inner device: ${JSON.stringify(current)}`);
            }
            // If we're currently using a video transform device, and a non-video transform device is selected
            // then the video transform device will be stopped automatically
            yield meetingManager.startVideoInputDevice(current);
        }
        catch (error) {
            logger.error('Failed to toggle Background Blur');
        }
        finally {
            setIsLoading(false);
        }
    });
    React.useEffect(() => {
        const handleClick = (deviceId) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                // If background blur is on, then re-use the same video transform pipeline, but replace the inner device
                // If background blur is not on, then do a normal video selection
                let newDevice = deviceId;
                if (amazonChimeSdkJs.isVideoTransformDevice(selectedDevice) && !isLoading) {
                    setIsLoading(true);
                    if ('chooseNewInnerDevice' in selectedDevice) {
                        // @ts-ignore
                        newDevice = selectedDevice.chooseNewInnerDevice(deviceId);
                    }
                    else {
                        logger.error('Transform device cannot choose new inner device');
                    }
                }
                if (isVideoEnabled) {
                    yield meetingManager.startVideoInputDevice(newDevice);
                }
                else {
                    meetingManager.selectVideoInputDevice(newDevice);
                }
            }
            catch (error) {
                logger.error('Failed to select video input device');
            }
            finally {
                setIsLoading(false);
            }
        });
        const getDropdownWithVideoTransformOptions = () => __awaiter(void 0, void 0, void 0, function* () {
            const deviceOptions = yield Promise.all(videoDevices.map((device) => __awaiter(void 0, void 0, void 0, function* () {
                return (React__default["default"].createElement(PopOverItem, { key: device.deviceId, checked: yield isOptionActive(selectedDevice, device.deviceId), onClick: () => __awaiter(void 0, void 0, void 0, function* () { return handleClick(device.deviceId); }) },
                    React__default["default"].createElement("span", null, device.label)));
            })));
            if (isBackgroundBlurSupported) {
                const videoTransformOptions = (React__default["default"].createElement(PopOverItem, { key: "videoinput", checked: amazonChimeSdkJs.isVideoTransformDevice(selectedDevice), disabled: isLoading, onClick: toggleBackgroundBlur },
                    React__default["default"].createElement(React__default["default"].Fragment, null,
                        isLoading && React__default["default"].createElement(Spinner, { width: "1.5rem", height: "1.5rem" }),
                        backgroundBlurLabel)));
                deviceOptions.push(React__default["default"].createElement(PopOverSeparator, { key: "separator" }));
                deviceOptions.push(videoTransformOptions);
            }
            setDropdownWithVideoTransformOptions(deviceOptions);
        });
        getDropdownWithVideoTransformOptions();
    }, [
        createBackgroundBlurDevice,
        meetingManager,
        meetingManager.startVideoInputDevice,
        videoDevices,
        isLoading,
        isVideoEnabled,
        selectedDevice,
        isBackgroundBlurSupported,
    ]);
    return (React__default["default"].createElement(ControlBarButton, Object.assign({ icon: React__default["default"].createElement(Camera, { disabled: !isVideoEnabled }), onClick: toggleVideo, label: label }, rest), dropdownWithVideoTransformOptions));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const VideoInputControl = (_a) => {
    var { label = 'Video' } = _a, rest = __rest(_a, ["label"]);
    const logger = useLogger();
    const meetingManager = useMeetingManager();
    const { devices, selectedDevice } = useVideoInputs();
    const { isVideoEnabled, toggleVideo } = useLocalVideo();
    const [dropdownOptions, setDropdownOptions] = React.useState([]);
    React.useEffect(() => {
        const handleClick = (deviceId) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (isVideoEnabled) {
                    yield meetingManager.startVideoInputDevice(deviceId);
                }
                else {
                    meetingManager.selectVideoInputDevice(deviceId);
                }
            }
            catch (error) {
                logger.error('VideoInputControl failed to select video input device');
            }
        });
        const getDropdownOptions = () => __awaiter(void 0, void 0, void 0, function* () {
            const dropdownOptions = yield Promise.all(devices.map((device) => __awaiter(void 0, void 0, void 0, function* () {
                return ({
                    children: React__default["default"].createElement("span", null, device.label),
                    checked: yield isOptionActive(selectedDevice, device.deviceId),
                    onClick: () => __awaiter(void 0, void 0, void 0, function* () { return yield handleClick(device.deviceId); }),
                });
            })));
            setDropdownOptions(dropdownOptions);
        });
        getDropdownOptions();
    }, [
        devices,
        selectedDevice,
        isVideoEnabled,
        meetingManager,
        meetingManager.startVideoInputDevice,
    ]);
    return (React__default["default"].createElement(ControlBarButton, Object.assign({ icon: React__default["default"].createElement(Camera, { disabled: !isVideoEnabled }), onClick: toggleVideo, label: label, popOver: dropdownOptions }, rest)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ContentTile = styled__default["default"](VideoTile) `
  background-color: ${({ theme }) => theme.colors.greys.grey80};
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const ContentShare = (_a) => {
    var { className } = _a, rest = __rest(_a, ["className"]);
    const audioVideo = useAudioVideo();
    const { tileId } = useContentShareState();
    const videoEl = React.useRef(null);
    React.useEffect(() => {
        if (!audioVideo || !videoEl.current || !tileId) {
            return;
        }
        audioVideo.bindVideoElement(tileId, videoEl.current);
        return () => {
            const tile = audioVideo.getVideoTile(tileId);
            if (tile) {
                audioVideo.unbindVideoElement(tileId);
            }
        };
    }, [audioVideo, tileId]);
    return tileId ? (React__default["default"].createElement(ContentTile, Object.assign({ objectFit: "contain", className: className || '' }, rest, { ref: videoEl }))) : null;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useApplyVideoObjectFit(videoEl) {
    React.useEffect(() => {
        var _a;
        function onLoaded() {
            if (!videoEl.current) {
                return;
            }
            const height = videoEl.current.videoHeight;
            const width = videoEl.current.videoWidth;
            videoEl.current.style.objectFit = height > width ? 'contain' : 'cover';
        }
        (_a = videoEl.current) === null || _a === void 0 ? void 0 : _a.addEventListener('loadedmetadata', onLoaded);
        return () => { var _a; return (_a = videoEl.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('loadedmetadata', onLoaded); };
    }, [videoEl]);
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledLocalVideo = styled__default["default"](VideoTile) `
  ${(props) => (!props.active ? 'display: none' : '')};
`;
const LocalVideo = (_a) => {
    var { nameplate } = _a, rest = __rest(_a, ["nameplate"]);
    const { tileId, isVideoEnabled } = useLocalVideo();
    const audioVideo = useAudioVideo();
    const videoEl = React.useRef(null);
    useApplyVideoObjectFit(videoEl);
    React.useEffect(() => {
        if (!audioVideo || !tileId || !videoEl.current || !isVideoEnabled) {
            return;
        }
        audioVideo.bindVideoElement(tileId, videoEl.current);
        return () => {
            const tile = audioVideo.getVideoTile(tileId);
            if (tile) {
                audioVideo.unbindVideoElement(tileId);
            }
        };
    }, [audioVideo, tileId, isVideoEnabled]);
    return (React__default["default"].createElement(StyledLocalVideo, Object.assign({ active: isVideoEnabled, nameplate: nameplate, ref: videoEl }, rest)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledPreview = styled__default["default"](VideoTile) `
  height: auto;
  background: unset;

  video {
    position: static;
  }
`;
const PreviewVideo = (props) => {
    const logger = useLogger();
    const audioVideo = useAudioVideo();
    const { selectedDevice } = useVideoInputs();
    const videoEl = React.useRef(null);
    const meetingManager = useMeetingManager();
    const { setIsVideoEnabled } = useLocalVideo();
    React.useEffect(() => {
        const videoElement = videoEl.current;
        return () => {
            if (videoElement) {
                audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.stopVideoPreviewForVideoInput(videoElement);
                audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.stopVideoInput();
                setIsVideoEnabled(false);
            }
        };
    }, [audioVideo]);
    React.useEffect(() => {
        function startPreview() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!audioVideo || !selectedDevice || !videoEl.current) {
                    return;
                }
                try {
                    yield meetingManager.startVideoInputDevice(selectedDevice);
                    audioVideo.startVideoPreviewForVideoInput(videoEl.current);
                    setIsVideoEnabled(true);
                }
                catch (error) {
                    logger.error('Failed to start video preview');
                }
            });
        }
        startPreview();
    }, [audioVideo, selectedDevice]);
    return React__default["default"].createElement(StyledPreview, Object.assign({}, props, { ref: videoEl }));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const RemoteVideo = (_a) => {
    var { name, className, tileId } = _a, rest = __rest(_a, ["name", "className", "tileId"]);
    const audioVideo = useAudioVideo();
    const videoEl = React.useRef(null);
    useApplyVideoObjectFit(videoEl);
    React.useEffect(() => {
        if (!audioVideo || !videoEl.current) {
            return;
        }
        audioVideo.bindVideoElement(tileId, videoEl.current);
        return () => {
            const tile = audioVideo.getVideoTile(tileId);
            if (tile) {
                audioVideo.unbindVideoElement(tileId);
            }
        };
    }, [audioVideo, tileId]);
    return (React__default["default"].createElement(VideoTile, Object.assign({}, rest, { ref: videoEl, nameplate: name, className: `ch-remote-video--${tileId} ${className || ''}` })));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const RemoteVideos = (props) => {
    const { roster } = useRosterState();
    const { tiles, tileIdToAttendeeId } = useRemoteVideoTileState();
    return (React__default["default"].createElement(React__default["default"].Fragment, null, tiles.map((tileId) => {
        const attendee = roster[tileIdToAttendeeId[tileId]] || {};
        const { name } = attendee;
        return (React__default["default"].createElement(RemoteVideo, Object.assign({}, props, { key: tileId, tileId: tileId, name: name })));
    })));
};
React.memo(RemoteVideos);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const FeaturedRemoteVideos = (props) => {
    const gridData = useGridData();
    const { roster } = useRosterState();
    const { tileId: featuredTileId } = useFeaturedTileState();
    const { tileId: contentTileId } = useContentShareState();
    const { tiles, tileIdToAttendeeId } = useRemoteVideoTileState();
    return (React__default["default"].createElement(React__default["default"].Fragment, null, tiles.map((tileId) => {
        const featured = !contentTileId && featuredTileId === tileId;
        const styles = gridData && featured ? 'grid-area: ft;' : '';
        const classes = `${featured ? 'ch-featured-tile' : ''} ${props.className || ''}`;
        const attendee = roster[tileIdToAttendeeId[tileId]] || {};
        const { name } = attendee;
        return (React__default["default"].createElement(RemoteVideo, Object.assign({ tileId: tileId, name: name }, props, { className: classes, key: tileId, css: styles })));
    })));
};
React.memo(FeaturedRemoteVideos);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const fluidStyles = `
  height: 100%;
  width: 100%;
`;
const staticStyles = `
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 20vw;
  max-height: 30vh;
  height: auto;

  video {
    position: static;
  }
`;
const VideoTileGrid = (_a) => {
    var { noRemoteVideoView, layout = 'featured' } = _a, rest = __rest(_a, ["noRemoteVideoView", "layout"]);
    const { tileId: featureTileId } = useFeaturedTileState();
    const { tiles } = useRemoteVideoTileState();
    const { tileId: contentTileId } = useContentShareState();
    const { isVideoEnabled } = useLocalVideo();
    const featured = (layout === 'featured' && !!featureTileId) || !!contentTileId;
    const remoteSize = tiles.length + (contentTileId ? 1 : 0);
    const gridSize = remoteSize > 1 && isVideoEnabled ? remoteSize + 1 : remoteSize;
    return (React__default["default"].createElement(VideoGrid, Object.assign({}, rest, { size: gridSize, layout: featured ? 'featured' : null }),
        React__default["default"].createElement(ContentShare, { css: "grid-area: ft;" }),
        layout === 'featured' ? React__default["default"].createElement(FeaturedRemoteVideos, null) : React__default["default"].createElement(RemoteVideos, null),
        React__default["default"].createElement(LocalVideo, { nameplate: "Me", css: gridSize > 1 ? fluidStyles : staticStyles }),
        remoteSize === 0 && noRemoteVideoView));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useAttendeeAudioStatus(attendeeId) {
    const audioVideo = useAudioVideo();
    const [muted, setMuted] = React.useState(false);
    const [signalStrength, setSignalStrength] = React.useState(1);
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        const callback = (_, __, muted, signalStrength) => {
            if (muted !== null) {
                setMuted(muted);
            }
            if (signalStrength !== null) {
                setSignalStrength(signalStrength);
            }
        };
        audioVideo.realtimeSubscribeToVolumeIndicator(attendeeId, callback);
        return () => audioVideo.realtimeUnsubscribeFromVolumeIndicator(attendeeId, callback);
    }, [audioVideo, attendeeId]);
    return {
        muted,
        signalStrength,
    };
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledMicVolumeIndicator = styled__default["default"].div `
  position: relative;
  height: inherit;
  line-height: 0;

  .ch-mic-icon {
    position: relative;
    z-index: 2;
    width: 100%;
  }

  .ch-bg-volume-wrapper {
    position: absolute;
    bottom: 41%;
    left: 40%;
    height: 38%;
    width: 21%;
    border-radius: 20%;
    overflow: hidden;
  }

  .ch-bg-volume-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: bottom;
    will-change: transform;
    background-color: ${(props) => props.signalStrength && props.signalStrength <= 0.5
    ? props.theme.colors.error.light
    : props.theme.colors.primary.light};
  }

  ${baseSpacing}
  ${baseStyles}
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const MicVolumeIndicator = React.forwardRef((_a, bgRef) => {
    var { muted = false, signalStrength, className: propClassName } = _a, rest = __rest(_a, ["muted", "signalStrength", "className"]);
    const poorConnection = signalStrength !== undefined && signalStrength <= 0.5;
    const className = propClassName
        ? `${propClassName} ch-mic-volume-indicator`
        : 'ch-mic-volume-indicator';
    return (React__default["default"].createElement(StyledMicVolumeIndicator, Object.assign({ className: className, signalStrength: signalStrength, muted: muted }, rest),
        React__default["default"].createElement(Microphone, { muted: muted, className: "ch-mic-icon", poorConnection: poorConnection }),
        React__default["default"].createElement("div", { className: "ch-bg-volume-wrapper" },
            React__default["default"].createElement("div", { ref: bgRef, className: "ch-bg-volume-fill", "data-testid": "volume-fill" }))));
});

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const MicrophoneActivity = (_a) => {
    var { attendeeId } = _a, rest = __rest(_a, ["attendeeId"]);
    const audioVideo = useAudioVideo();
    const bgEl = React.useRef(null);
    const { signalStrength, muted } = useAttendeeAudioStatus(attendeeId);
    React.useEffect(() => {
        if (!audioVideo || !attendeeId || !bgEl.current) {
            return;
        }
        const callback = (_, volume, __, ___) => {
            if (bgEl.current) {
                bgEl.current.style.transform = `scaleY(${volume})`;
            }
        };
        audioVideo.realtimeSubscribeToVolumeIndicator(attendeeId, callback);
        return () => audioVideo.realtimeUnsubscribeFromVolumeIndicator(attendeeId, callback);
    }, [attendeeId]);
    return (React__default["default"].createElement(MicVolumeIndicator, Object.assign({}, rest, { ref: bgEl, muted: muted, signalStrength: signalStrength })));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useAttendeeStatus(attendeeId) {
    const audioVideo = useAudioVideo();
    const audioState = useAttendeeAudioStatus(attendeeId);
    const [videoTileId, setVideoTileId] = React.useState(() => {
        var _a, _b, _c;
        if (!audioVideo) {
            return null;
        }
        const localAttendeeId = (_c = (_b = (_a = audioVideo.audioVideoController) === null || _a === void 0 ? void 0 : _a.realtimeController) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.localAttendeeId;
        const isLocalUser = attendeeId === localAttendeeId;
        const tiles = audioVideo.getAllVideoTiles();
        const videoTile = tiles.find((tile) => {
            const state = tile.state();
            if (state.isContent || (isLocalUser && !state.active)) {
                return false;
            }
            return state.boundAttendeeId === attendeeId;
        });
        return videoTile ? videoTile.state().tileId : null;
    });
    const [contentTileId, setContentTileId] = React.useState(() => {
        if (!audioVideo) {
            return null;
        }
        const tiles = audioVideo.getAllVideoTiles();
        const videoTile = tiles.find((tile) => {
            const state = tile.state();
            if (!state.boundAttendeeId || !state.isContent) {
                return false;
            }
            const baseId = new amazonChimeSdkJs.DefaultModality(state.boundAttendeeId).base();
            return baseId === attendeeId;
        });
        return videoTile ? videoTile.state().tileId : null;
    });
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        const observer = {
            videoTileDidUpdate: (state) => {
                if (state.boundAttendeeId !== attendeeId) {
                    return;
                }
                if (state.localTile && videoTileId && !state.boundVideoStream) {
                    setVideoTileId(null);
                    return;
                }
                if (videoTileId || !state.tileId || state.isContent) {
                    return;
                }
                setVideoTileId(state.tileId);
            },
            videoTileWasRemoved: (tileId) => {
                if (tileId === videoTileId) {
                    setVideoTileId(null);
                }
            },
        };
        audioVideo.addObserver(observer);
        return () => audioVideo.removeObserver(observer);
    }, [audioVideo, videoTileId, attendeeId]);
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        const observer = {
            videoTileDidUpdate: (state) => {
                if (!state.isContent || !state.boundAttendeeId || contentTileId) {
                    return;
                }
                const baseId = new amazonChimeSdkJs.DefaultModality(state.boundAttendeeId).base();
                if (baseId !== attendeeId) {
                    return;
                }
                setContentTileId(state.tileId);
            },
            videoTileWasRemoved: (tileId) => {
                if (tileId === contentTileId) {
                    setContentTileId(null);
                }
            },
        };
        audioVideo.addObserver(observer);
        return () => audioVideo.removeObserver(observer);
    }, [audioVideo, contentTileId, attendeeId]);
    const videoEnabled = typeof videoTileId === 'number' && videoTileId > -1;
    const sharingContent = typeof contentTileId === 'number' && contentTileId > -1;
    return Object.assign(Object.assign({}, audioState), { videoEnabled,
        sharingContent });
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const RosterAttendee = (_a) => {
    var _b;
    var { attendeeId } = _a, rest = __rest(_a, ["attendeeId"]);
    const { muted, videoEnabled, sharingContent } = useAttendeeStatus(attendeeId);
    const { roster } = useRosterState();
    const attendeeName = ((_b = roster[attendeeId]) === null || _b === void 0 ? void 0 : _b.name) || '';
    return (React__default["default"].createElement(RosterCell, Object.assign({ name: attendeeName, muted: muted, videoEnabled: videoEnabled, sharingContent: sharingContent, microphone: React__default["default"].createElement(MicrophoneActivity, { attendeeId: attendeeId }) }, rest)));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const BackgroundReplacementProviderContext = React.createContext(undefined);
const BackgroundReplacementProvider = ({ spec, options, children }) => {
    const logger = useLogger();
    const [isBackgroundReplacementSupported, setIsBackgroundReplacementSupported,] = React.useState(undefined);
    const [backgroundReplacementProcessor, setBackgroundReplacementProcessor] = React.useState(undefined);
    const replacementSpec = useMemoCompare(spec, (prev, next) => {
        if (Object.is(prev, next)) {
            return true;
        }
        return false;
    });
    const replacementOptions = useMemoCompare(options, (prev, next) => {
        var _a, _b;
        if (isPrevNextEmpty(prev, next) || isPrevNextUndefined(prev, next)) {
            return true;
        }
        if (((_a = prev === null || prev === void 0 ? void 0 : prev.imageBlob) === null || _a === void 0 ? void 0 : _a.size) === ((_b = next === null || next === void 0 ? void 0 : next.imageBlob) === null || _b === void 0 ? void 0 : _b.size) ||
            (prev === null || prev === void 0 ? void 0 : prev.filterCPUUtilization) === (next === null || next === void 0 ? void 0 : next.filterCPUUtilization) ||
            (prev === null || prev === void 0 ? void 0 : prev.logger) !== (next === null || next === void 0 ? void 0 : next.logger) ||
            (prev === null || prev === void 0 ? void 0 : prev.reportingPeriodMillis) !== (next === null || next === void 0 ? void 0 : next.reportingPeriodMillis)) {
            return false;
        }
        return true;
    });
    React.useEffect(() => {
        // One reason we need to initialize first, even though we'll destroy this background replacement processor when we create a new device
        // is because we need to check if background replacement is supported by initializing the background replacement processor to see if the browser supports
        initializeBackgroundReplacement();
        return () => {
            logger.info('Specs or options were changed. Destroying and re-initializing background replacement processor.');
            backgroundReplacementProcessor === null || backgroundReplacementProcessor === void 0 ? void 0 : backgroundReplacementProcessor.destroy();
        };
    }, [replacementSpec, replacementOptions]);
    function initializeBackgroundReplacement() {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info(`Initializing background replacement processor with, ${JSON.stringify(spec)}, ${JSON.stringify(options)}`);
            try {
                const createdProcessor = yield amazonChimeSdkJs.BackgroundReplacementVideoFrameProcessor.create(Object.assign({}, spec), Object.assign({}, options));
                // BackgroundReplacementVideoFrameProcessor.create will return a NoOpVideoFrameProcessor
                // in the case that BackgroundReplacementVideoFrameProcessor.isSupported() returns false.
                // BackgroundReplacementVideoFrameProcessor.create() can also throw an error in case loading
                // the assets are not fetched successfully.
                if (createdProcessor instanceof amazonChimeSdkJs.NoOpVideoFrameProcessor) {
                    logger.warn('Initialized NoOpVideoFrameProcessor');
                    setBackgroundReplacementProcessor(undefined);
                    setIsBackgroundReplacementSupported(false);
                    return undefined;
                }
                else {
                    logger.info(`Initialized background replacement processor: ${JSON.stringify(createdProcessor)}`);
                    setBackgroundReplacementProcessor(createdProcessor);
                    setIsBackgroundReplacementSupported(true);
                    return createdProcessor;
                }
            }
            catch (error) {
                logger.error(`Error creating a background replacement video frame processor device. ${error}`);
                setBackgroundReplacementProcessor(undefined);
                setIsBackgroundReplacementSupported(false);
                return undefined;
            }
        });
    }
    const createBackgroundReplacementDevice = (selectedDevice) => __awaiter(void 0, void 0, void 0, function* () {
        logger.info(`Calling createBackgroundReplacementDevice with device: ${JSON.stringify(selectedDevice)}`);
        const currentProcessor = yield initializeBackgroundReplacement();
        try {
            const logger = (options === null || options === void 0 ? void 0 : options.logger) ||
                new amazonChimeSdkJs.ConsoleLogger('BackgroundReplacementProvider', amazonChimeSdkJs.LogLevel.INFO);
            if (currentProcessor) {
                const chosenVideoTransformDevice = new amazonChimeSdkJs.DefaultVideoTransformDevice(logger, selectedDevice, [currentProcessor]);
                return chosenVideoTransformDevice;
            }
            else {
                throw new Error('Processor has not been created. Background Replacement is not supported.');
            }
        }
        catch (error) {
            throw new Error(`Failed to create a DefaultVideoTransformDevice: ${error}`);
        }
    });
    const value = {
        createBackgroundReplacementDevice,
        isBackgroundReplacementSupported,
        backgroundReplacementProcessor,
    };
    return (React__default["default"].createElement(BackgroundReplacementProviderContext.Provider, { value: value }, children));
};
const useBackgroundReplacement = () => {
    const context = React.useContext(BackgroundReplacementProviderContext);
    if (!context) {
        throw new Error('useBackgroundReplacement must be used within BackgroundReplacementProvider');
    }
    return context;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useActiveSpeakersState() {
    const meetingManager = useMeetingManager();
    const [activeSpeakers, setActiveSpeakers] = React.useState([]);
    React.useEffect(() => {
        const activeSpeakerCb = (speakers) => setActiveSpeakers(speakers);
        meetingManager.subscribeToActiveSpeaker(activeSpeakerCb);
        return () => meetingManager.unsubscribeFromActiveSpeaker(activeSpeakerCb);
    }, []);
    return activeSpeakers;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const useMeetingStatus = () => {
    const meetingManager = useMeetingManager();
    const [meetingStatus, setMeetingStatus] = React.useState(() => meetingManager.meetingStatus);
    React.useEffect(() => {
        const callback = (updatedMeetingStatus) => {
            setMeetingStatus(updatedMeetingStatus);
        };
        meetingManager.subscribeToMeetingStatus(callback);
        return () => {
            meetingManager.unsubscribeFromMeetingStatus(callback);
        };
    }, []);
    return meetingStatus;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const useLocalAudioInputActivity = (cb) => {
    const audioVideo = useAudioVideo();
    const { selectedDevice } = useAudioInputs();
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        let analyserNode;
        let restart = false;
        let data;
        let frameIndex;
        let isMounted = true;
        let lastDecimal;
        audioVideo.addDeviceChangeObserver({
            audioInputsChanged: () => {
                restart = true;
            },
        });
        function initializePreview() {
            if (!audioVideo || !isMounted)
                return;
            analyserNode = audioVideo.createAnalyserNodeForAudioInput();
            if (!(analyserNode === null || analyserNode === void 0 ? void 0 : analyserNode.getByteTimeDomainData)) {
                return;
            }
            data = new Uint8Array(analyserNode.fftSize);
            frameIndex = 0;
            restart = false;
            requestAnimationFrame(analyserNodeCallback);
        }
        function analyserNodeCallback() {
            if (!analyserNode) {
                return;
            }
            if (frameIndex === 0) {
                analyserNode.getByteTimeDomainData(data);
                const lowest = 0.01;
                let max = lowest;
                for (const f of data) {
                    max = Math.max(max, (f - 128) / 128);
                }
                const decimal = (Math.log(lowest) - Math.log(max)) / Math.log(lowest);
                if (lastDecimal !== decimal) {
                    lastDecimal = decimal;
                    if (cb) {
                        cb(decimal);
                    }
                }
            }
            frameIndex = (frameIndex + 1) % 2;
            if (restart) {
                setTimeout(initializePreview, 500);
            }
            else if (isMounted) {
                requestAnimationFrame(analyserNodeCallback);
            }
        }
        initializePreview();
        return () => {
            isMounted = false;
        };
    }, [audioVideo, selectedDevice, cb]);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const useLocalAudioInputActivityPreview = (elementRef, scaleDirection = 'horizontal') => {
    const cb = React.useCallback((decimal) => {
        if (elementRef.current) {
            elementRef.current.style.transform =
                scaleDirection === 'horizontal'
                    ? `scaleX(${decimal})`
                    : `scaleY(${decimal})`;
        }
    }, [scaleDirection]);
    useLocalAudioInputActivity(cb);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useDeviceLabelTriggerStatus() {
    const meetingManager = useMeetingManager();
    const [status, setStatus] = React.useState(exports.DeviceLabelTriggerStatus.UNTRIGGERED);
    React.useEffect(() => {
        meetingManager.subscribeToDeviceLabelTriggerStatus(setStatus);
        return () => {
            meetingManager.unsubscribeFromDeviceLabelTriggerStatus(setStatus);
        };
    }, [meetingManager]);
    return status;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
function useMediaStreamMetrics() {
    const audioVideo = useAudioVideo();
    const [mediaStreamMetrics, setMediaStreamMetrics] = React.useState({
        audioPacketsSentFractionLossPercent: null,
        audioPacketsReceivedFractionLossPercent: null,
        audioSpeakerDelayMs: null,
        audioUpstreamRoundTripTimeMs: null,
        audioUpstreamJitterMs: null,
        audioDownstreamJitterMs: null,
        currentRoundTripTimeMs: null,
        availableOutgoingBandwidth: null,
        availableIncomingBandwidth: null,
        rtcStatsReport: null,
        videoStreamMetrics: {},
    });
    React.useEffect(() => {
        if (!audioVideo) {
            return;
        }
        const observer = {
            metricsDidReceive(clientMetricReport) {
                const { audioPacketLossPercent, audioPacketsReceivedFractionLoss, audioSpeakerDelayMs, audioUpstreamRoundTripTimeMs, audioUpstreamJitterMs, audioDownstreamJitterMs, currentRoundTripTimeMs, availableOutgoingBitrate, availableIncomingBitrate, } = clientMetricReport.getObservableMetrics();
                // Return 0 if the metric value is NaN, otherwise return its integer part.
                setMediaStreamMetrics({
                    audioPacketsSentFractionLossPercent: audioPacketLossPercent | 0,
                    audioPacketsReceivedFractionLossPercent: audioPacketsReceivedFractionLoss | 0,
                    audioSpeakerDelayMs: audioSpeakerDelayMs | 0,
                    audioUpstreamRoundTripTimeMs: audioUpstreamRoundTripTimeMs | 0,
                    audioUpstreamJitterMs: audioUpstreamJitterMs | 0,
                    audioDownstreamJitterMs: audioDownstreamJitterMs | 0,
                    currentRoundTripTimeMs: currentRoundTripTimeMs | 0,
                    availableOutgoingBandwidth: (availableOutgoingBitrate / 1000) | 0,
                    availableIncomingBandwidth: (availableIncomingBitrate / 1000) | 0,
                    rtcStatsReport: clientMetricReport.getRTCStatsReport(),
                    videoStreamMetrics: clientMetricReport.getObservableVideoMetrics(),
                });
            },
        };
        audioVideo.addObserver(observer);
        return () => audioVideo.removeObserver(observer);
    }, [audioVideo]);
    return mediaStreamMetrics;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const fonts = {
    body: "'Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
    monospace: 'Menlo, monospace',
};
const radii = {
    default: '0.25rem',
    circle: '50%',
};
const zIndex = {
    navigation: 10,
    controlBar: 15,
    modal: 20,
    popOver: 30,
    notificationGroup: 40,
};
var BreakpointEnum;
(function (BreakpointEnum) {
    BreakpointEnum["xs"] = "xs";
    BreakpointEnum["sm"] = "sm";
    BreakpointEnum["md"] = "md";
    BreakpointEnum["lg"] = "lg";
    BreakpointEnum["xl"] = "xl";
})(BreakpointEnum || (BreakpointEnum = {}));
const breakpointValues = {
    [BreakpointEnum.xs]: '20rem',
    [BreakpointEnum.sm]: '35.5rem',
    [BreakpointEnum.md]: '48rem',
    [BreakpointEnum.lg]: '64rem',
    [BreakpointEnum.xl]: '90rem', // 1440px large screen
};
const breakpointAliaseValues = {
    [0]: breakpointValues[BreakpointEnum.xs],
    [1]: breakpointValues[BreakpointEnum.sm],
    [2]: breakpointValues[BreakpointEnum.md],
    [3]: breakpointValues[BreakpointEnum.lg],
    [4]: breakpointValues[BreakpointEnum.xl],
};
const breakpoints = Object.assign(Object.assign({}, breakpointValues), breakpointAliaseValues);
const mediaQueries = {
    min: {
        xs: `@media screen and (min-width: ${breakpoints.xs})`,
        sm: `@media screen and (min-width: ${breakpoints.sm})`,
        md: `@media screen and (min-width: ${breakpoints.md})`,
        lg: `@media screen and (min-width: ${breakpoints.lg})`,
        xl: `@media screen and (min-width: ${breakpoints.xl})`,
    },
    max: {
        xs: `@media screen and (max-width: ${breakpoints.xs})`,
        sm: `@media screen and (max-width: ${breakpoints.sm})`,
        md: `@media screen and (max-width: ${breakpoints.md})`,
        lg: `@media screen and (max-width: ${breakpoints.lg})`,
        xl: `@media screen and (max-width: ${breakpoints.xl})`,
    },
};
const fontSizes = {
    baseFontSize: '16px',
    fontWeight: 'normal',
    h1: {
        fontSize: '5.3rem',
        fontWeight: 'normal',
        lineHeight: '5.625rem',
        mobile: {
            fontSize: '3.8125rem',
            fontWeight: 'normal',
            lineHeight: '5.625rem',
        },
    },
    h2: {
        fontSize: '3.925rem',
        fontWeight: 'normal',
        lineHeight: '3.75rem',
        mobile: {
            fontSize: '3.05rem',
            fontWeight: 'normal',
            lineHeight: '4.5rem',
        },
    },
    h3: {
        fontSize: '2.44125rem',
        fontWeight: 'normal',
        lineHeight: '3.75rem',
        mobile: {
            fontSize: '2.90625rem',
            fontWeight: 'normal',
            lineHeight: '3rem',
        },
    },
    h4: {
        fontSize: '1.953125rem',
        fontWeight: 'normal',
        lineHeight: '3.75rem',
        mobile: {
            fontSize: '2.15rem',
            fontWeight: 'normal',
            lineHeight: '3rem',
        },
    },
    h5: {
        fontSize: '1.5625rem',
        fontWeight: 'normal',
        lineHeight: '3rem',
        mobile: {
            fontSize: '1.59375rem',
            fontWeight: 'normal',
            lineHeight: '1.875rem',
        },
    },
    h6: {
        fontSize: '1.25rem',
        fontWeight: 'normal',
        lineHeight: '1.875rem',
        mobile: {
            fontSize: '1.18125rem',
            fontWeight: 'normal',
            lineHeight: '1.5rem',
        },
    },
    text: {
        fontSize: '0.875rem',
        lineHeight: '1.43',
    },
    label: {
        fontSize: '0.875rem',
        lineHeight: '1.43',
    },
    small: {
        fontSize: '0.75rem',
        lineHeight: '1.43',
    },
    footnote: {
        fontSize: '0.65rem',
        lineHeight: '1rem',
    },
};
const modalSizes = {
    md: {
        width: '35rem',
        height: '94vh',
    },
    lg: {
        width: '50rem',
        height: '94vh',
    },
    fullscreen: {
        width: '98vw',
        height: '96vh',
    },
};
const iconButtonSizes = {
    sm: '1.5rem',
    md: '2.5rem',
    lg: '4rem',
};
const defaultTheme = {
    breakpoints,
    mediaQueries,
    fonts,
    fontSizes,
    radii,
    zIndex,
    modalSizes,
    iconButtonSizes,
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const colors$1 = {
    primary: {
        lightest: '#88b2ff',
        lighter: '#5d96ff',
        light: '#327aff',
        main: '#075fff',
        dark: '#004ddb',
        darker: '#0042bb',
        darkest: '#002f85',
    },
    secondary: {
        light: '#ff8e74',
        main: '#ff7654',
        dark: '#e86c4d',
    },
    error: {
        lightest: '#FCF7F6',
        lighter: '#F5DDD5',
        light: '#FF927C',
        primary: '#C52000',
        dark: '#9E3319',
        darker: '#89301A',
        darkest: '#791800',
    },
    success: {
        lightest: '#EBF1EA',
        lighter: '#CEE0C8',
        light: '#50CD49',
        primary: '#067000',
        dark: '#305D1D',
        darker: '#2C511D',
        darkest: '#184206',
    },
    info: {
        lightest: '#DADFE7',
        lighter: '#C4CCD9',
        light: '#418AFD',
        primary: '#2555A0',
        dark: '#264A82',
        darker: '#243F6B',
        darkest: '#123366',
    },
    warning: {
        lightest: '#FAF8EA',
        lighter: '#F7E79E',
        light: '#F9DC60',
        primary: '#F9CC09',
        dark: '#665A2A',
        darker: '#584E26',
        darkest: '#534201',
    },
    greys: {
        black: '#000000',
        grey100: '#1b1c20',
        grey90: '#2e2f34',
        grey80: '#3f4149',
        grey70: '#50545e',
        grey60: '#616672',
        grey50: '#7d818b',
        grey40: '#989da5',
        grey30: '#d4d5d8',
        grey20: '#e4e9f2',
        grey10: '#f0f1f2',
        white: '#ffffff',
    },
};
const globalStyle$1 = {
    bgd: colors$1.greys.white,
    text: colors$1.greys.grey80,
    fontSize: defaultTheme.fontSizes.baseFontSize,
};
const shadows$1 = {
    none: 'none',
    small: `0 0.09375rem 0.0625rem 0 ${hexTorgba(colors$1.greys.grey100, 0.15)}`,
    medium: `0 0.5rem 0.85rem 0 ${hexTorgba(colors$1.greys.black, 0.15)}`,
    large: `0 0.75rem 1.875rem 0 ${hexTorgba(colors$1.greys.black, 0.15)}`,
};
const buttons$1 = {
    primary: {
        shadow: shadows$1.none,
        static: {
            bgd: colors$1.primary.light,
            border: `0.03125rem solid ${colors$1.primary.darker}`,
            text: colors$1.greys.white,
            shadow: 'none',
        },
        hover: {
            bgd: colors$1.primary.dark,
            border: `0.03125rem solid ${colors$1.primary.darkest}`,
            text: colors$1.greys.white,
            shadow: 'none',
        },
        focus: {
            bgd: colors$1.primary.dark,
            border: `0.03125rem solid ${colors$1.primary.darker}`,
            text: colors$1.greys.white,
            shadow: `0 0 0 0.25rem ${colors$1.primary.lightest}`,
        },
        active: {
            bgd: colors$1.primary.darker,
            border: `0.03125rem solid ${colors$1.greys.black}`,
            text: colors$1.greys.white,
            shadow: `0 0 0 0.25rem ${colors$1.primary.lightest}`,
        },
        selected: {
            bgd: colors$1.primary.light,
            border: `0.03125rem solid ${colors$1.primary.dark}`,
            text: colors$1.greys.white,
            shadow: `none`,
        },
        disabled: {
            bgd: colors$1.greys.white,
            border: `0.03125rem solid ${colors$1.greys.grey10}`,
            text: colors$1.greys.grey40,
            shadow: `none`,
        },
    },
    secondary: {
        shadow: shadows$1.none,
        static: {
            bgd: colors$1.greys.white,
            border: `0.03125rem solid ${colors$1.greys.grey30}`,
            text: colors$1.greys.grey80,
            shadow: 'none',
        },
        hover: {
            bgd: colors$1.greys.grey10,
            border: `0.03125rem solid ${colors$1.greys.grey30}`,
            text: colors$1.greys.grey80,
            shadow: 'none',
        },
        focus: {
            bgd: colors$1.greys.grey10,
            border: `0.03125rem solid ${colors$1.primary.dark}`,
            text: colors$1.greys.grey80,
            shadow: `0 0 0 0.25rem ${colors$1.primary.light}`,
        },
        active: {
            bgd: colors$1.greys.grey20,
            border: `0.03125rem solid ${colors$1.greys.grey40}`,
            text: colors$1.greys.grey80,
            shadow: `0 0 0 0.25rem ${colors$1.primary.dark}`,
        },
        selected: {
            bgd: colors$1.greys.grey10,
            border: `0.03125rem solid ${colors$1.greys.grey30}`,
            text: colors$1.greys.grey80,
            shadow: `0 0 0 0.25rem ${colors$1.primary.dark}`,
        },
        disabled: {
            bgd: colors$1.greys.white,
            border: `0.03125rem solid ${colors$1.greys.grey10}`,
            text: colors$1.greys.grey40,
            shadow: 'none',
        },
    },
    icon: {
        shadow: shadows$1.none,
        static: {
            bgd: 'transparent',
            border: `0.03125rem  solid transparent`,
            text: colors$1.greys.grey80,
            shadow: 'none',
        },
        hover: {
            bgd: colors$1.primary.dark,
            border: `0.03125rem  solid transparent`,
            text: colors$1.greys.white,
            shadow: 'none',
        },
        focus: {
            bgd: 'transparent',
            border: `0.03125rem  solid ${colors$1.primary.darker}`,
            text: colors$1.greys.grey80,
            shadow: `0 0 0 0.25rem ${colors$1.primary.lightest}`,
        },
        active: {
            bgd: colors$1.primary.darker,
            border: `0.03125rem  solid ${colors$1.primary.darker}`,
            text: colors$1.greys.white,
            shadow: `0 0 0 0.25rem ${colors$1.primary.lightest}`,
        },
        selected: {
            bgd: colors$1.primary.light,
            border: `0.03125rem  solid ${colors$1.primary.darker}`,
            text: colors$1.greys.white,
            shadow: 'none',
        },
        disabled: {
            bgd: 'transparent',
            border: 'none',
            text: colors$1.greys.grey40,
            shadow: 'none',
        },
    },
};
const inputs$1 = {
    bgd: colors$1.greys.white,
    border: `0.03125rem solid ${colors$1.greys.grey30}`,
    borderRadius: defaultTheme.radii.default,
    fontColor: colors$1.greys.grey80,
    placeholder: colors$1.greys.grey40,
    shadow: `0 0.0625rem 0.0625rem 0 ${hexTorgba(colors$1.greys.black, 0.1)}`,
    clearBg: colors$1.greys.grey50,
    focus: {
        bgd: colors$1.greys.white,
        border: `solid 0.03125rem ${colors$1.primary.lighter}`,
        shadow: `0 0 0 0.125rem ${colors$1.primary.lightest}`,
    },
    error: {
        border: `0.03125rem solid ${colors$1.error.dark}`,
        fontColor: colors$1.error.primary,
        shadow: `0 0 0 0.125rem ${colors$1.error.light}`,
    },
    checked: {
        bgd: colors$1.primary.main,
        border: `solid 0.03125rem ${colors$1.primary.main}`,
        fontColor: colors$1.greys.white,
        shadow: `0 0.03125rem 0.03125rem 0 ${hexTorgba(colors$1.primary.dark, 0.7)}`,
    },
};
const modal$1 = {
    bgd: colors$1.greys.white,
    text: colors$1.greys.grey80,
    wrapperBgd: hexTorgba(colors$1.greys.grey50, 0.9),
    titleSize: defaultTheme.fontSizes.h5.fontSize,
    titleWeight: 'normal',
    shadow: shadows$1.large,
    border: colors$1.greys.grey30,
};
const popOver$1 = {
    menuBgd: `${hexTorgba(colors$1.greys.grey10, 0.85)}`,
    menuBorder: `0.5px solid ${colors$1.greys.grey20}`,
    shadow: shadows$1.large,
    itemBgd: 'transparent',
    itemText: colors$1.greys.grey70,
    titleText: colors$1.greys.grey60,
    active: {
        itemBgd: colors$1.primary.dark,
        itemText: colors$1.greys.white,
    },
    disabled: colors$1.greys.grey40,
    separator: `${hexTorgba(colors$1.greys.grey40, 0.3)}`,
};
const notification$1 = {
    shadow: shadows$1.large,
    error: {
        text: colors$1.error.lightest,
        closeButton: {
            text: colors$1.error.lighter,
            hover: {
                bgd: colors$1.error.lighter,
                text: colors$1.error.dark,
            },
            active: {
                bgd: colors$1.error.lightest,
                text: colors$1.error.darker,
            },
        },
    },
    success: {
        text: colors$1.success.lightest,
        closeButton: {
            text: colors$1.success.lighter,
            hover: {
                bgd: colors$1.success.lighter,
                text: colors$1.success.dark,
            },
            active: {
                bgd: colors$1.success.lightest,
                text: colors$1.success.darker,
            },
        },
    },
    info: {
        text: colors$1.info.lightest,
        closeButton: {
            text: colors$1.info.lighter,
            hover: {
                bgd: colors$1.info.lighter,
                text: colors$1.info.dark,
            },
            active: {
                bgd: colors$1.info.lightest,
                text: colors$1.info.darker,
            },
        },
    },
    warning: {
        text: colors$1.warning.darker,
        closeButton: {
            text: colors$1.warning.dark,
            hover: {
                bgd: colors$1.warning.dark,
                text: colors$1.greys.white,
            },
            active: {
                bgd: colors$1.warning.darker,
                text: colors$1.greys.white,
            },
        },
    },
};
const links$1 = {
    fontColor: colors$1.primary.main,
    fontColorHover: colors$1.primary.dark,
    fontColorActive: colors$1.primary.darker,
    fontColorVisited: colors$1.primary.darkest,
};
const controlBar$1 = {
    text: colors$1.greys.grey70,
    shadow: shadows$1.large,
    bgd: colors$1.greys.white,
    border: `0.03125rem solid ${colors$1.greys.grey20}`,
    opacity: 1,
    selected: {
        text: buttons$1.primary.selected.text,
        bgd: buttons$1.primary.selected.bgd,
    },
};
const roster$1 = {
    title: colors$1.greys.grey100,
    primaryText: colors$1.greys.grey80,
    secondaryText: colors$1.greys.grey50,
    headerBorder: colors$1.greys.grey40,
    containerBorder: colors$1.greys.grey30,
    bgd: colors$1.greys.grey10,
    fgd: colors$1.greys.white,
    shadow: shadows$1.large,
    maxWidth: '18.5rem',
};
const navbar$1 = {
    text: colors$1.greys.grey80,
    bgd: colors$1.greys.grey10,
    headerBorder: colors$1.greys.grey40,
    wrapperBgd: hexTorgba(colors$1.greys.grey50, 0.9),
};
const videoGrid$1 = {
    bgd: colors$1.greys.white,
};
const chatBubble$1 = {
    incoming: {
        bgd: colors$1.greys.white,
        fontColor: colors$1.greys.grey60,
        linkColor: colors$1.primary.main,
        linkColorHover: colors$1.primary.dark,
        linkColorActive: colors$1.primary.darker,
        linkColorVisited: colors$1.primary.darkest,
    },
    outgoing: {
        bgd: colors$1.primary.main,
        fontColor: colors$1.greys.grey10,
        linkColor: colors$1.greys.white,
        linkColorHover: colors$1.greys.grey10,
        linkColorActive: colors$1.greys.grey20,
        linkColorVisited: colors$1.greys.grey30,
    },
    container: {
        fontColor: colors$1.greys.grey70,
        bgd: colors$1.greys.grey10,
    },
};
const messageAttachment$1 = {
    size: {
        fontColor: colors$1.greys.grey40,
        bgd: colors$1.greys.white,
        letterSpacing: '-0.07px',
        lineHight: '16px',
        fontSize: '10.4px',
    },
    icon: {
        bgd: colors$1.greys.grey10,
        color: colors$1.greys.grey80,
    },
    name: {
        fontColor: colors$1.greys.grey80,
    },
    content: {
        letterSpacing: '-0.09px',
        bgd: colors$1.greys.white,
        fontColor: colors$1.greys.grey80,
    },
};
const channelList$1 = {
    bgd: colors$1.greys.white,
    fontColor: colors$1.greys.grey70,
    border: '1px solid transparent',
    active: {
        bgd: colors$1.primary.dark,
        fontColor: colors$1.greys.white,
    },
    hover: {
        bgd: colors$1.greys.grey10,
    },
    focus: {
        border: `1px solid ${colors$1.primary.dark}`,
        selectedBorder: `1px solid ${colors$1.greys.grey10}`,
    },
    selected: {
        bgd: colors$1.primary.light,
        fontColor: colors$1.greys.white,
    },
    iconButton: {
        activeBgd: colors$1.greys.white,
    },
};
const chatDateHeader$1 = {
    bgd: colors$1.greys.grey60,
    fontColor: colors$1.greys.white,
};
const lightTheme = Object.assign({ name: 'Light Theme', buttons: buttons$1,
    colors: colors$1,
    globalStyle: globalStyle$1,
    links: links$1,
    shadows: shadows$1,
    inputs: inputs$1,
    modal: modal$1,
    popOver: popOver$1,
    notification: notification$1,
    controlBar: controlBar$1,
    roster: roster$1,
    navbar: navbar$1,
    videoGrid: videoGrid$1,
    chatBubble: chatBubble$1,
    channelList: channelList$1,
    chatDateHeader: chatDateHeader$1,
    messageAttachment: messageAttachment$1 }, defaultTheme);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const colors = {
    primary: {
        lightest: '#9DEFFB',
        lighter: '#8AEBFA',
        light: '#62E5F9',
        main: '#4FE2F8',
        dark: '#29DCF8',
        darker: '#22B6CB',
        darkest: '#1FA1B5',
    },
    secondary: {
        light: '#FF8B70',
        main: '#FF9B83',
        dark: '#FFB4A1',
    },
    error: {
        lightest: '#FBC1C0',
        lighter: '#FDA8A6',
        light: '#FD9B99',
        primary: '#FF8B8A',
        dark: '#583A39',
        darker: '#452F2E',
        darkest: '#302020',
    },
    success: {
        lightest: '#F4FBF1',
        lighter: '#D2F1C5',
        light: '#BAF39E',
        primary: '#A3E881',
        dark: '#4F6444',
        darker: '#46573D',
        darkest: '#324129',
    },
    info: {
        lightest: '#F0F5FD',
        lighter: '#D8E6FB',
        light: '#C4DBFF',
        primary: '#BAD4FF',
        dark: '#555B69',
        darker: '#494F59',
        darkest: '#343C48',
    },
    warning: {
        lightest: '#FDFDF7',
        lighter: '#3F4149',
        light: '#FFEB96',
        primary: '#FBDF64',
        dark: '#6D653C',
        darker: '#5E5736',
        darkest: '#47422D',
    },
    greys: {
        black: '#000000',
        grey100: '#1b1c20',
        grey90: '#2e2f34',
        grey80: '#3f4149',
        grey70: '#50545e',
        grey60: '#616672',
        grey50: '#7d818b',
        grey40: '#989da5',
        grey30: '#d4d5d8',
        grey20: '#e4e9f2',
        grey10: '#f0f1f2',
        white: '#ffffff',
    },
};
const globalStyle = {
    bgd: colors.greys.grey80,
    text: colors.greys.white,
    fontSize: defaultTheme.fontSizes.baseFontSize,
};
const shadows = {
    none: 'none',
    small: '',
    medium: '',
    large: `0 0.75rem 1.875rem 0 ${hexTorgba(colors.greys.black, 0.15)}`,
};
const buttons = {
    primary: {
        shadow: shadows.none,
        static: {
            bgd: colors.primary.main,
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.grey80,
            shadow: 'none',
        },
        hover: {
            bgd: colors.primary.dark,
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.grey80,
            shadow: 'none',
        },
        focus: {
            bgd: colors.primary.dark,
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.grey80,
            shadow: `0 0 0 0.25rem ${colors.primary.darkest}`,
        },
        active: {
            bgd: colors.primary.darker,
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.grey80,
            shadow: 'none',
        },
        selected: {
            bgd: colors.primary.light,
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.grey80,
            shadow: 'none',
        },
        disabled: {
            bgd: colors.greys.grey80,
            border: `0.03125rem solid ${hexTorgba(colors.greys.black, 0.4)}`,
            text: colors.greys.grey40,
            shadow: 'none',
        },
    },
    secondary: {
        shadow: shadows.none,
        static: {
            bgd: colors.greys.grey50,
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.white,
            shadow: 'none',
        },
        hover: {
            bgd: colors.greys.grey60,
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.white,
            shadow: 'none',
        },
        focus: {
            bgd: colors.greys.grey60,
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.white,
            shadow: `0 0 0 0.25rem ${colors.primary.lighter}`,
        },
        active: {
            bgd: colors.greys.grey70,
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.white,
            shadow: 'none',
        },
        selected: {
            bgd: colors.greys.grey60,
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.white,
            shadow: 'none',
        },
        disabled: {
            bgd: colors.greys.grey80,
            border: `0.03125rem solid ${hexTorgba(colors.greys.black, 0.6)}`,
            text: colors.greys.grey40,
            shadow: 'none',
        },
    },
    icon: {
        shadow: shadows.none,
        static: {
            bgd: 'transparent',
            border: `0.03125rem solid transparent`,
            text: colors.greys.grey20,
            shadow: 'none',
        },
        hover: {
            bgd: colors.primary.dark,
            border: `0.03125rem  solid ${colors.greys.black}`,
            text: colors.greys.grey80,
            shadow: 'none',
        },
        focus: {
            bgd: 'transparent',
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.grey80,
            shadow: `0 0 0 0.25rem ${colors.primary.darker}`,
        },
        active: {
            bgd: colors.primary.darker,
            border: `0.03125rem solid ${colors.greys.black}`,
            text: colors.greys.grey80,
            shadow: 'none',
        },
        selected: {
            bgd: colors.primary.light,
            border: `0 solid ${colors.greys.black}`,
            text: colors.greys.grey80,
            shadow: 'none',
        },
        disabled: {
            bgd: 'transparent',
            border: 'none',
            text: colors.greys.grey40,
            shadow: 'none',
        },
    },
};
const inputs = {
    bgd: colors.greys.grey80,
    border: `0.03125rem solid ${colors.greys.black}`,
    borderRadius: defaultTheme.radii.default,
    fontColor: colors.greys.white,
    placeholder: colors.greys.grey50,
    shadow: `0 0.0625rem 0.0625rem 0 ${hexTorgba(colors.greys.black, 0.1)}`,
    clearBg: colors.greys.white,
    focus: {
        bgd: colors.greys.white,
        border: `solid 0.03125rem ${colors.primary.main}`,
        shadow: `0 0 0 0.125rem ${colors.primary.lighter}`,
    },
    error: {
        border: `0.03125rem solid ${colors.error.primary}`,
        fontColor: colors.error.primary,
        shadow: `0 0 0 0.125rem ${colors.error.light}`,
    },
    checked: {
        bgd: colors.primary.main,
        border: `solid 0.03125rem ${colors.primary.dark}`,
        fontColor: colors.greys.grey80,
        shadow: `inset 0 0.03125rem 0 0 ${hexTorgba(colors.greys.white, 0.1)}`,
    },
};
const modal = {
    bgd: colors.greys.grey80,
    text: colors.greys.white,
    wrapperBgd: hexTorgba(colors.greys.grey60, 0.9),
    titleSize: defaultTheme.fontSizes.h5.fontSize,
    titleWeight: 'normal',
    shadow: `0 1rem 2rem 0 rgba(0, 0, 0, ${hexTorgba(colors.greys.black, 0.15)})`,
    border: colors.greys.black,
};
const popOver = {
    menuBgd: `${hexTorgba(colors.greys.grey90, 0.85)}`,
    menuBorder: colors.greys.grey100,
    shadow: shadows.large,
    itemBgd: 'transparent',
    itemText: colors.greys.white,
    titleText: colors.greys.white,
    active: {
        itemBgd: colors.primary.dark,
        itemText: colors.greys.grey80,
    },
    disabled: colors.greys.grey40,
    separator: colors.greys.grey100,
};
const notification = {
    shadow: shadows.large,
    error: {
        text: colors.error.darker,
        closeButton: {
            text: colors.error.dark,
            hover: {
                bgd: colors.error.dark,
                text: colors.greys.white,
            },
            active: {
                bgd: colors.error.darker,
                text: colors.greys.white,
            },
        },
    },
    success: {
        text: colors.success.darker,
        closeButton: {
            text: colors.success.dark,
            hover: {
                bgd: colors.success.dark,
                text: colors.greys.white,
            },
            active: {
                bgd: colors.success.darker,
                text: colors.greys.white,
            },
        },
    },
    info: {
        text: colors.info.darker,
        closeButton: {
            text: colors.info.dark,
            hover: {
                bgd: colors.info.dark,
                text: colors.greys.white,
            },
            active: {
                bgd: colors.info.darker,
                text: colors.greys.white,
            },
        },
    },
    warning: {
        text: colors.warning.darker,
        closeButton: {
            text: colors.warning.dark,
            hover: {
                bgd: colors.warning.dark,
                text: colors.greys.white,
            },
            active: {
                bgd: colors.warning.darker,
                text: colors.greys.white,
            },
        },
    },
};
const links = {
    fontColor: colors.primary.main,
    fontColorHover: colors.primary.dark,
    fontColorActive: colors.primary.darker,
    fontColorVisited: colors.primary.darkest,
};
const controlBar = {
    text: colors.greys.grey20,
    shadow: shadows.large,
    bgd: colors.greys.grey100,
    border: 'none',
    opacity: 1,
    selected: {
        text: buttons.primary.selected.text,
        bgd: buttons.primary.selected.bgd,
    },
};
const roster = {
    title: colors.greys.white,
    primaryText: colors.greys.white,
    secondaryText: colors.greys.grey20,
    headerBorder: colors.greys.black,
    containerBorder: colors.greys.black,
    bgd: colors.greys.grey100,
    fgd: colors.greys.grey60,
    shadow: shadows.large,
    maxWidth: '18.5rem',
};
const navbar = {
    text: colors.greys.white,
    bgd: colors.greys.grey100,
    headerBorder: colors.greys.black,
    wrapperBgd: hexTorgba(colors.greys.grey60, 0.9),
};
const videoGrid = {
    bgd: colors.greys.grey90,
};
const chatBubble = {
    incoming: {
        bgd: colors.greys.grey80,
        fontColor: colors.greys.grey30,
        linkColor: colors.primary.main,
        linkColorHover: colors.primary.dark,
        linkColorActive: colors.primary.darker,
        linkColorVisited: colors.primary.darkest,
    },
    outgoing: {
        bgd: colors.primary.dark,
        fontColor: colors.greys.grey70,
        linkColor: colors.greys.grey80,
        linkColorHover: colors.greys.grey70,
        linkColorActive: colors.greys.grey60,
        linkColorVisited: colors.greys.grey50,
    },
    container: {
        fontColor: colors.greys.grey30,
        bgd: colors.greys.black,
    },
};
const messageAttachment = {
    size: {
        fontColor: colors.greys.grey30,
        bgd: colors.greys.grey10,
        letterSpacing: '-0.07px',
        lineHight: '16px',
        fontSize: '10.4px',
    },
    icon: {
        bgd: colors.greys.grey40,
        color: colors.greys.grey10,
    },
    name: {
        fontColor: colors.greys.white,
    },
    content: {
        letterSpacing: '-0.09px',
        bgd: colors.greys.grey60,
        fontColor: colors.greys.white,
    },
};
const channelList = {
    bgd: colors.greys.grey80,
    fontColor: colors.greys.grey10,
    border: '1px solid transparent',
    active: {
        bgd: colors.primary.dark,
        fontColor: colors.greys.grey70,
    },
    hover: {
        bgd: colors.greys.grey70,
    },
    focus: {
        border: `1px solid ${colors.primary.dark}`,
        selectedBorder: `1px solid ${colors.greys.grey70}`,
    },
    selected: {
        bgd: colors.primary.light,
        fontColor: colors.greys.grey70,
    },
    iconButton: {
        activeBgd: colors.greys.grey80,
    },
};
const chatDateHeader = {
    bgd: colors.greys.grey10,
    fontColor: colors.greys.grey80,
};
const darkTheme = Object.assign({ name: 'Dark Theme', buttons,
    colors,
    globalStyle,
    links,
    shadows,
    inputs,
    modal,
    popOver,
    notification,
    controlBar,
    roster,
    navbar,
    videoGrid,
    chatBubble,
    channelList,
    chatDateHeader,
    messageAttachment }, defaultTheme);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const StyledReset = styled.css `
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
const GlobalStyles = styled.createGlobalStyle `
  ${StyledReset};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: ${(props) => props.theme.fontSizes.baseFontSize};
    font-family: ${(props) => props.theme.fonts.body};;
    background-color: ${(props) => props.theme.globalStyle.bgd};
    color: ${(props) => props.theme.globalStyle.text};
    min-height: 100%;
  }
`;

var VERSION = {
    "hash": "803c970",
    "raw": "v3.6.0",
    "semverString": "3.6.0"
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
class Versioning {
    /**
     * Return string representation of SDK name
     */
    static get sdkName() {
        return 'amazon-chime-sdk-component-library-react';
    }
    /**
     * Return string representation of SDK version
     */
    static get sdkVersion() {
        return VERSION.semverString;
    }
}

exports.Add = Add;
exports.Arrow = Arrow;
exports.Attachment = Attachment;
exports.Attendees = Attendees;
exports.AudioInputControl = AudioInputControl;
exports.AudioInputVFControl = AudioInputVFControl;
exports.AudioOutputControl = AudioOutputControl;
exports.AudioVideoContext = AudioVideoContext;
exports.AudioVideoProvider = AudioVideoProvider;
exports.BackgroundBlurCheckbox = BackgroundBlurCheckbox;
exports.BackgroundBlurProvider = BackgroundBlurProvider;
exports.BackgroundReplacementProvider = BackgroundReplacementProvider;
exports.Badge = Badge;
exports.Button = Button;
exports.Camera = Camera;
exports.CameraSelection = CameraSelection;
exports.Caret = Caret;
exports.Caution = Caution;
exports.Cell = Cell;
exports.ChannelItem = ChannelItem;
exports.ChannelList = ChannelList;
exports.Chat = Chat;
exports.ChatBubble = ChatBubble;
exports.ChatBubbleContainer = ChatBubbleContainer;
exports.Check = Check;
exports.CheckRound = CheckRound;
exports.Checkbox = Checkbox;
exports.Clear = Clear;
exports.Clock = Clock;
exports.Cog = Cog;
exports.ConnectionProblem = ConnectionProblem;
exports.ContentShare = ContentShare;
exports.ContentShareControl = ContentShareControl;
exports.ContentShareProvider = ContentShareProvider;
exports.ControlBar = ControlBar;
exports.ControlBarButton = ControlBarButton;
exports.ControlBarContext = ControlBarContext;
exports.Crown = Crown;
exports.DeskPhone = DeskPhone;
exports.DevicesProvider = DevicesProvider;
exports.Dialer = Dialer;
exports.Dislike = Dislike;
exports.Dock = Dock;
exports.Document = Document;
exports.Dots = Dots;
exports.DropToAttach = DropToAttach;
exports.Echo = Echo;
exports.EditableChatBubble = EditableChatBubble;
exports.EmojiPicker = EmojiPicker;
exports.Eye = Eye;
exports.FeaturedRemoteVideos = FeaturedRemoteVideos;
exports.FeaturedVideoTileProvider = FeaturedVideoTileProvider;
exports.Feedback = Feedback;
exports.Flex = Flex;
exports.FormField = FormField;
exports.GlobalStyles = GlobalStyles;
exports.Grid = Grid;
exports.Hamburger = Hamburger;
exports.HandRaise = HandRaise;
exports.Heading = Heading;
exports.IconButton = IconButton;
exports.InfiniteList = InfiniteList;
exports.Information = Information;
exports.Input = Input;
exports.InputWrapper = InputWrapper;
exports.KEY_CODES = KEY_CODES;
exports.Label = Label;
exports.Laptop = Laptop;
exports.LeaveMeeting = LeaveMeeting;
exports.Like = Like;
exports.ListHandRaise = ListHandRaise;
exports.LocalAudioOutputProvider = LocalAudioOutputProvider;
exports.LocalVideo = LocalVideo;
exports.LocalVideoProvider = LocalVideoProvider;
exports.Lock = Lock;
exports.LoggerContext = LoggerContext;
exports.LoggerProvider = LoggerProvider;
exports.Meeting = Meeting;
exports.MeetingEventProvider = MeetingEventProvider;
exports.MeetingEventProviderContext = MeetingEventProviderContext;
exports.MeetingManager = MeetingManager;
exports.MeetingProvider = MeetingProvider;
exports.MessageAttachment = MessageAttachment;
exports.MicSelection = MicSelection;
exports.Microphone = Microphone;
exports.MicrophoneActivity = MicrophoneActivity;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalButton = ModalButton;
exports.ModalButtonGroup = ModalButtonGroup;
exports.ModalContext = ModalContext;
exports.ModalHeader = ModalHeader;
exports.Navbar = Navbar;
exports.NavbarHeader = NavbarHeader;
exports.NavbarItem = NavbarItem;
exports.Notification = Notification;
exports.NotificationGroup = NotificationGroup;
exports.NotificationProvider = NotificationProvider;
exports.Pause = Pause;
exports.Phone = Phone;
exports.Pin = Pin;
exports.Play = Play;
exports.PopOver = PopOver;
exports.PopOverHeader = PopOverHeader;
exports.PopOverItem = PopOverItem;
exports.PopOverSeparator = PopOverSeparator;
exports.PopOverSubMenu = PopOverSubMenu;
exports.Portal = Portal;
exports.Presenter = Presenter;
exports.PreviewVideo = PreviewVideo;
exports.PrimaryButton = PrimaryButton;
exports.QualitySelection = QualitySelection;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Record = Record;
exports.RemoteVideo = RemoteVideo;
exports.RemoteVideoTileProvider = RemoteVideoTileProvider;
exports.RemoteVideos = RemoteVideos;
exports.Remove = Remove;
exports.Rooms = Rooms;
exports.Roster = Roster;
exports.RosterAttendee = RosterAttendee;
exports.RosterCell = RosterCell;
exports.RosterGroup = RosterGroup;
exports.RosterHeader = RosterHeader;
exports.RosterProvider = RosterProvider;
exports.ScreenShare = ScreenShare;
exports.Search = Search;
exports.SearchInput = SearchInput;
exports.SecondaryButton = SecondaryButton;
exports.Select = Select;
exports.Share = Share;
exports.SignalStrength = SignalStrength;
exports.Sound = Sound;
exports.SpeakerSelection = SpeakerSelection;
exports.Spinner = Spinner;
exports.StyledReset = StyledReset;
exports.Textarea = Textarea;
exports.UpAndDownCaret = UpAndDownCaret;
exports.UserActivityManager = UserActivityManager;
exports.UserActivityProvider = UserActivityProvider;
exports.Versioning = Versioning;
exports.VideoGrid = VideoGrid;
exports.VideoInputBackgroundBlurControl = VideoInputBackgroundBlurControl;
exports.VideoInputControl = VideoInputControl;
exports.VideoTile = VideoTile;
exports.VideoTileGrid = VideoTileGrid;
exports.VoiceFocusProvider = VoiceFocusProvider;
exports.WithTooltip = WithTooltip;
exports.ZoomIn = ZoomIn;
exports.ZoomOut = ZoomOut;
exports.darkTheme = darkTheme;
exports.formatDate = formatDate;
exports.formatTime = formatTime;
exports.getDeviceId = getDeviceId;
exports.isOptionActive = isOptionActive;
exports.lightTheme = lightTheme;
exports.useActiveSpeakersState = useActiveSpeakersState;
exports.useApplyVideoObjectFit = useApplyVideoObjectFit;
exports.useAttendeeAudioStatus = useAttendeeAudioStatus;
exports.useAttendeeStatus = useAttendeeStatus;
exports.useAudioInputs = useAudioInputs;
exports.useAudioOutputs = useAudioOutputs;
exports.useAudioVideo = useAudioVideo;
exports.useBackgroundBlur = useBackgroundBlur;
exports.useBackgroundReplacement = useBackgroundReplacement;
exports.useClickOutside = useClickOutside;
exports.useContentShareControls = useContentShareControls;
exports.useContentShareState = useContentShareState;
exports.useControlBarContext = useControlBarContext;
exports.useDeviceLabelTriggerStatus = useDeviceLabelTriggerStatus;
exports.useElementAspectRatio = useElementAspectRatio;
exports.useFeaturedTileState = useFeaturedTileState;
exports.useFocusIn = useFocusIn;
exports.useLocalAudioInputActivity = useLocalAudioInputActivity;
exports.useLocalAudioInputActivityPreview = useLocalAudioInputActivityPreview;
exports.useLocalAudioOutput = useLocalAudioOutput;
exports.useLocalVideo = useLocalVideo;
exports.useLogger = useLogger;
exports.useMediaStreamMetrics = useMediaStreamMetrics;
exports.useMeetingEvent = useMeetingEvent;
exports.useMeetingManager = useMeetingManager;
exports.useMeetingStatus = useMeetingStatus;
exports.useModalContext = useModalContext;
exports.useMouseMove = useMouseMove;
exports.useNotificationDispatch = useNotificationDispatch;
exports.useNotificationState = useNotificationState;
exports.useRemoteVideoTileState = useRemoteVideoTileState;
exports.useRosterState = useRosterState;
exports.useSelectVideoQuality = useSelectVideoQuality;
exports.useTabOutside = useTabOutside;
exports.useToggleLocalMute = useToggleLocalMute;
exports.useUniqueId = useUniqueId;
exports.useUserActivityState = useUserActivityState;
exports.useVideoInputs = useVideoInputs;
exports.useVoiceFocus = useVoiceFocus;
//# sourceMappingURL=index.js.map
