console.log('Curriculum cargado');


class SideBarElement extends React.Component{
    
    render(){
        return(
            <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page" data-bs-toggle="collapse" data-bs-target={"#"+this.props.ide}>
                {this.props.titulo}
                </a>
                <div className="collapse" id={this.props.ide} >
                    <div>{this.props.info}</div>
                </div>
          </li>
        );
    }
}

class Contacto extends React.Component{
    render(){
        return(
            <p><b>{this.props.titulo + ": "}</b><br/>{this.props.info}</p>
        );
    }
}

class Habilidades extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.title}</p>
                <div className="progress">
                    <div className="progress-bar bg-secondary" role="progressbar" style={{width: this.props.porcentaje + "%"}} aria-valuenow={this.props.porcentaje} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        );
    }
}

class SideBar extends React.Component{
    render(){
        return(
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark col-4 themed-grid-col">
                <img src="ImagenCV.png" className="rounded-circle me-2"/>
                <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <SideBarElement titulo="SOBRE MÍ" info = {<p>Soy una joven estudiante de segundo año de Ingeniería en Sistemas y Ciencias de la Computación dispuesta a trabajar, aprender y poner en práctica mis conocimientos.</p>} ide='sobre-collapse'/>
                        <SideBarElement titulo="APTITUDES" 
                        info = {<ul>
                                    <li>Responsable</li>
                                    <li>Trabajadora</li>
                                    <li>Rápida para aprender</li>
                                    <li>Creativa</li>
                                    <li>Versátil</li>
                                </ul>} ide='apt-collapse'/>
                        <SideBarElement titulo="CONTACTO" 
                        info = {<div>
                                    <Contacto titulo="Teléfono" info="(+502) 4442 6699"/>
                                    <Contacto titulo="Ubicación" info="Fraijanes, Guatemala"/>
                                    <Contacto titulo="Correo 1" info="garran191137@unis.edu.gt"/>
                                    <Contacto titulo="Correo 2" info="adaligaji@hotmail.com"/>
                                </div>} ide='cont-collapse'/>
                        <SideBarElement titulo="HABILIDADES" 
                        info = {<div>
                                    <Habilidades title="Office" porcentaje="90" />
                                    <Habilidades title="HTML" porcentaje="45" />
                                    <Habilidades title="Elm" porcentaje="45" />
                                    <Habilidades title="C++" porcentaje="60" />
                                </div>
                        } ide='hab-collapse'/>
                        <SideBarElement titulo="IDIOMAS" 
                        info = {<div>
                                    <p><b>Inglés:</b> Alto</p>
                                    <p><b>Español:</b> Nativo</p>
                                    <p><b>Francés:</b> Básico</p> 
                                </div>} ide='ide-collapse'/>
                    </ul>
                <hr/>
            </div>
        );
    } 
}


class Actividades extends React.Component{
    render(){
        return(
            <h3 className="fw-bold text-dark mt-3 posotion-fixed">{this.props.actividad}</h3>
        );
    }
}

class Detalle extends React.Component{
    render(){
        return(
            <div>
                <h6 className="fw-bold my-0 mx-3 text-secondary">{this.props.actividad}</h6>
                <a href="#" className="nav-link active" aria-current="page" data-bs-toggle="collapse" data-bs-target={"#"+this.props.ide}>
                    <p className="my-0 mx-3 text-secondary hide-me">Detalle</p>
                </a>
                <div className="collapse mx-4 my-0" id={this.props.ide} >
                    <p className='contenido'>{this.props.contenido}</p>
                </div>
            </div>
        );

    }
}

class Content extends React.Component{
    
    render(){
        const br = `\n`;
        return(
            <div className='col-8 themed-grid-col'>
                <div className="row flex-lg-row-reverse align-items-center g-2 py-2">
                    <h1 className="display-5 fw-bold ">ADALÍ GARRÁN JIMÉNEZ</h1>
                    <h2 className="display-6 fw-bold text-secondary">Estudiante</h2>
                    <div className="col-lg-6">
                        <Actividades actividad="ACTIVIDADES COMPLEMENTARIAS"/>
                            <Detalle actividad="ASOCIACIÓN ANINI" ide="act1-collapse" 
                            contenido={<ul>
                                            <li>Voluntariado en Casa Hogar Anini, Carretera a El Salvador:</li>
                                            <ul>
                                                <li>Limpieza de instalaciones.</li>
                                                <li>Actividades de recreación y educativas para los niños.</li>
                                            </ul>
                                        </ul>
                                        }/> 
                            <Detalle actividad="FUNDACIÓN AZTECA" ide="act2-collapse" 
                            contenido="Programa y título como Agente de Prevención de Drogas."/> 
                            <Detalle actividad="UNIVERSIDAD GALILEO" ide="act3-collapse" 
                            contenido={<ul>
                                        <li>Participación en la Competencia Nacional de Robótica BRC 3.0.</li>
                                        <li>Curso Virtual “Introducción a la Robótica: Construyendo mi Primer Robot - Parte 1”.</li>
                                       </ul>}/> 
                        <Actividades actividad="EXPERIENCIA LABORAL"/>
                            <Detalle actividad="CONSORCIO DE ASOCIACIONES SANTIAGO ATITLÁN" ide="ex-collapse" 
                            contenido="Prácticas de trabajo: creación de páqina de e-commerce e implementación de códigos QR para identificar productos."/> 
                    </div>           
                    <div className="col-lg-6">
                        <Actividades actividad="FORMACIÓN"/>
                            <Detalle actividad="COLEGIO ESPAÑOL DE GUATEMALA “PRÍNCIPE DE ASTURIAS”" ide="forma1-collapse" 
                            contenido={<ul>
                                        <li>Graduada de Bachiller en Ciencias y Letras (por el Ministerio de Educación de Guatemala)</li>
                                        <li>Título de Bachiller por el Ministerio de Educación de España.</li>
                                    </ul>}/>     
                            <Detalle actividad="UNIVERSIDAD DEL ISTMO" ide="forma2-collapse" 
                            contenido="Completado hasta el quinto semestre de la carrera de Ingeniería en Sistemas y Ciencias de la Computación."/>  
                        <Actividades actividad="LOGROS ACADÉMICOS"/>
                            <Detalle actividad="UNIVERSIDAD SAN CARLOS DE GUATEMALA" ide="logro1-collapse" 
                            contenido="Tercer lugar nacional en Física Fundamental en la XXIX Olimpíada Nacional de Ciencias."/> 
                            <Detalle actividad="UNIVERSIDAD DEL ISTMO" ide="logro2-collapse" 
                            contenido="Primer lugar “Olimpiadas Preuniversitarias” 2018 en Matemática de 5to Curso."/> 
                    </div>
                    
                </div>
            </div>
        );
    }
}



class Page extends React.Component{
    render(){
        return(
            <div className='row mb-3'>
                <SideBar/>
                <Content/>
            </div>
    
        );
    }
}



var  appRoot = document.getElementById('app');
 
ReactDOM.render(<Page/>, appRoot);