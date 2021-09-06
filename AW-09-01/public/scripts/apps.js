"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('Curriculum cargado');

var SideBarElement = function (_React$Component) {
    _inherits(SideBarElement, _React$Component);

    function SideBarElement() {
        _classCallCheck(this, SideBarElement);

        return _possibleConstructorReturn(this, (SideBarElement.__proto__ || Object.getPrototypeOf(SideBarElement)).apply(this, arguments));
    }

    _createClass(SideBarElement, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                { className: "nav-item" },
                React.createElement(
                    "a",
                    { href: "#", className: "nav-link active", "aria-current": "page", "data-bs-toggle": "collapse", "data-bs-target": "#" + this.props.ide },
                    this.props.titulo
                ),
                React.createElement(
                    "div",
                    { className: "collapse", id: this.props.ide },
                    React.createElement(
                        "div",
                        null,
                        this.props.info
                    )
                )
            );
        }
    }]);

    return SideBarElement;
}(React.Component);

var Contacto = function (_React$Component2) {
    _inherits(Contacto, _React$Component2);

    function Contacto() {
        _classCallCheck(this, Contacto);

        return _possibleConstructorReturn(this, (Contacto.__proto__ || Object.getPrototypeOf(Contacto)).apply(this, arguments));
    }

    _createClass(Contacto, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                React.createElement(
                    "b",
                    null,
                    this.props.titulo + ": "
                ),
                React.createElement("br", null),
                this.props.info
            );
        }
    }]);

    return Contacto;
}(React.Component);

var Habilidades = function (_React$Component3) {
    _inherits(Habilidades, _React$Component3);

    function Habilidades() {
        _classCallCheck(this, Habilidades);

        return _possibleConstructorReturn(this, (Habilidades.__proto__ || Object.getPrototypeOf(Habilidades)).apply(this, arguments));
    }

    _createClass(Habilidades, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "div",
                    { className: "progress" },
                    React.createElement("div", { className: "progress-bar bg-secondary", role: "progressbar", style: { width: this.props.porcentaje + "%" }, "aria-valuenow": this.props.porcentaje, "aria-valuemin": "0", "aria-valuemax": "100" })
                )
            );
        }
    }]);

    return Habilidades;
}(React.Component);

var SideBar = function (_React$Component4) {
    _inherits(SideBar, _React$Component4);

    function SideBar() {
        _classCallCheck(this, SideBar);

        return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
    }

    _createClass(SideBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "d-flex flex-column flex-shrink-0 p-3 text-white bg-dark col-4 themed-grid-col" },
                React.createElement("img", { src: "ImagenCV.png", className: "rounded-circle me-2" }),
                React.createElement("hr", null),
                React.createElement(
                    "ul",
                    { className: "nav nav-pills flex-column mb-auto" },
                    React.createElement(SideBarElement, { titulo: "SOBRE M\xCD", info: React.createElement(
                            "p",
                            null,
                            "Soy una joven estudiante de segundo a\xF1o de Ingenier\xEDa en Sistemas y Ciencias de la Computaci\xF3n dispuesta a trabajar, aprender y poner en pr\xE1ctica mis conocimientos."
                        ), ide: "sobre-collapse" }),
                    React.createElement(SideBarElement, { titulo: "APTITUDES",
                        info: React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Responsable"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Trabajadora"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "R\xE1pida para aprender"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Creativa"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Vers\xE1til"
                            )
                        ), ide: "apt-collapse" }),
                    React.createElement(SideBarElement, { titulo: "CONTACTO",
                        info: React.createElement(
                            "div",
                            null,
                            React.createElement(Contacto, { titulo: "Tel\xE9fono", info: "(+502) 4442 6699" }),
                            React.createElement(Contacto, { titulo: "Ubicaci\xF3n", info: "Fraijanes, Guatemala" }),
                            React.createElement(Contacto, { titulo: "Correo 1", info: "garran191137@unis.edu.gt" }),
                            React.createElement(Contacto, { titulo: "Correo 2", info: "adaligaji@hotmail.com" })
                        ), ide: "cont-collapse" }),
                    React.createElement(SideBarElement, { titulo: "HABILIDADES",
                        info: React.createElement(
                            "div",
                            null,
                            React.createElement(Habilidades, { title: "Office", porcentaje: "90" }),
                            React.createElement(Habilidades, { title: "HTML", porcentaje: "45" }),
                            React.createElement(Habilidades, { title: "Elm", porcentaje: "45" }),
                            React.createElement(Habilidades, { title: "C++", porcentaje: "60" })
                        ), ide: "hab-collapse" }),
                    React.createElement(SideBarElement, { titulo: "IDIOMAS",
                        info: React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "b",
                                    null,
                                    "Ingl\xE9s:"
                                ),
                                " Alto"
                            ),
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "b",
                                    null,
                                    "Espa\xF1ol:"
                                ),
                                " Nativo"
                            ),
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "b",
                                    null,
                                    "Franc\xE9s:"
                                ),
                                " B\xE1sico"
                            )
                        ), ide: "ide-collapse" })
                ),
                React.createElement("hr", null)
            );
        }
    }]);

    return SideBar;
}(React.Component);

var Actividades = function (_React$Component5) {
    _inherits(Actividades, _React$Component5);

    function Actividades() {
        _classCallCheck(this, Actividades);

        return _possibleConstructorReturn(this, (Actividades.__proto__ || Object.getPrototypeOf(Actividades)).apply(this, arguments));
    }

    _createClass(Actividades, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h3",
                { className: "fw-bold text-dark mt-3 posotion-fixed" },
                this.props.actividad
            );
        }
    }]);

    return Actividades;
}(React.Component);

var Detalle = function (_React$Component6) {
    _inherits(Detalle, _React$Component6);

    function Detalle() {
        _classCallCheck(this, Detalle);

        return _possibleConstructorReturn(this, (Detalle.__proto__ || Object.getPrototypeOf(Detalle)).apply(this, arguments));
    }

    _createClass(Detalle, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h6",
                    { className: "fw-bold my-0 mx-3 text-secondary" },
                    this.props.actividad
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "nav-link active", "aria-current": "page", "data-bs-toggle": "collapse", "data-bs-target": "#" + this.props.ide },
                    React.createElement(
                        "p",
                        { className: "my-0 mx-3 text-secondary hide-me" },
                        "Detalle"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "collapse mx-4 my-0", id: this.props.ide },
                    React.createElement(
                        "p",
                        { className: "contenido" },
                        this.props.contenido
                    )
                )
            );
        }
    }]);

    return Detalle;
}(React.Component);

var Content = function (_React$Component7) {
    _inherits(Content, _React$Component7);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            var br = "\n";
            return React.createElement(
                "div",
                { className: "col-8 themed-grid-col" },
                React.createElement(
                    "div",
                    { className: "row flex-lg-row-reverse align-items-center g-2 py-2" },
                    React.createElement(
                        "h1",
                        { className: "display-5 fw-bold " },
                        "ADAL\xCD GARR\xC1N JIM\xC9NEZ"
                    ),
                    React.createElement(
                        "h2",
                        { className: "display-6 fw-bold text-secondary" },
                        "Estudiante"
                    ),
                    React.createElement(
                        "div",
                        { className: "col-lg-6" },
                        React.createElement(Actividades, { actividad: "ACTIVIDADES COMPLEMENTARIAS" }),
                        React.createElement(Detalle, { actividad: "ASOCIACI\xD3N ANINI", ide: "act1-collapse",
                            contenido: React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Voluntariado en Casa Hogar Anini, Carretera a El Salvador:"
                                ),
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        "Limpieza de instalaciones."
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Actividades de recreaci\xF3n y educativas para los ni\xF1os."
                                    )
                                )
                            ) }),
                        React.createElement(Detalle, { actividad: "FUNDACI\xD3N AZTECA", ide: "act2-collapse",
                            contenido: "Programa y t\xEDtulo como Agente de Prevenci\xF3n de Drogas." }),
                        React.createElement(Detalle, { actividad: "UNIVERSIDAD GALILEO", ide: "act3-collapse",
                            contenido: React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Participaci\xF3n en la Competencia Nacional de Rob\xF3tica BRC 3.0."
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Curso Virtual \u201CIntroducci\xF3n a la Rob\xF3tica: Construyendo mi Primer Robot - Parte 1\u201D."
                                )
                            ) }),
                        React.createElement(Actividades, { actividad: "EXPERIENCIA LABORAL" }),
                        React.createElement(Detalle, { actividad: "CONSORCIO DE ASOCIACIONES SANTIAGO ATITL\xC1N", ide: "ex-collapse",
                            contenido: "Pr\xE1cticas de trabajo: creaci\xF3n de p\xE1qina de e-commerce e implementaci\xF3n de c\xF3digos QR para identificar productos." })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-lg-6" },
                        React.createElement(Actividades, { actividad: "FORMACI\xD3N" }),
                        React.createElement(Detalle, { actividad: "COLEGIO ESPA\xD1OL DE GUATEMALA \u201CPR\xCDNCIPE DE ASTURIAS\u201D", ide: "forma1-collapse",
                            contenido: React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Graduada de Bachiller en Ciencias y Letras (por el Ministerio de Educaci\xF3n de Guatemala)"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "T\xEDtulo de Bachiller por el Ministerio de Educaci\xF3n de Espa\xF1a."
                                )
                            ) }),
                        React.createElement(Detalle, { actividad: "UNIVERSIDAD DEL ISTMO", ide: "forma2-collapse",
                            contenido: "Completado hasta el quinto semestre de la carrera de Ingenier\xEDa en Sistemas y Ciencias de la Computaci\xF3n." }),
                        React.createElement(Actividades, { actividad: "LOGROS ACAD\xC9MICOS" }),
                        React.createElement(Detalle, { actividad: "UNIVERSIDAD SAN CARLOS DE GUATEMALA", ide: "logro1-collapse",
                            contenido: "Tercer lugar nacional en F\xEDsica Fundamental en la XXIX Olimp\xEDada Nacional de Ciencias." }),
                        React.createElement(Detalle, { actividad: "UNIVERSIDAD DEL ISTMO", ide: "logro2-collapse",
                            contenido: "Primer lugar \u201COlimpiadas Preuniversitarias\u201D 2018 en Matem\xE1tica de 5to Curso." })
                    )
                )
            );
        }
    }]);

    return Content;
}(React.Component);

var Page = function (_React$Component8) {
    _inherits(Page, _React$Component8);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row mb-3" },
                React.createElement(SideBar, null),
                React.createElement(Content, null)
            );
        }
    }]);

    return Page;
}(React.Component);

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(Page, null), appRoot);
