import React, { useState } from "react";
import "./login.css";
import axios from "axios";

import Swal from "sweetalert2";

import loginImg from "./loginImg.png";

export const Login = ({ setUid, setUser }) => {
  const [loginValues, setLoginValues] = useState({
    lemail: "",
    lpassword: "",
  });

  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const [startLogging, setStartLogging] = useState(false);

  const handleLoginChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    console.log(loginValues);
    e.preventDefault();
    setIsLoginLoading(true);

    axios
      .post("https://hidden-journey-49991.herokuapp.com/api/auth/loginUser", {
        loginValues,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.ok) {
          setUser(res.data.user);
          setUid(res.data.user.uid);
        } else {
          Swal.fire("error", res.data.msg, "info");
          setIsLoginLoading(false);
        }
      });
  };

  return (
    <div className="login-screen">
      <div className="login">
        <img
          alt=""
          onClick={() => {
            setStartLogging(true);
          }}
          className="login-icon"
          src={loginImg}
        />
        <h1 className="app-name animate__animated animate__fadeInDown">
          Palmira
        </h1>
        <h2 className="app-slogan animate__animated animate__fadeInDown">
          Assistencia virtual de proximidad para quien mas quieres
        </h2>
      </div>
      {startLogging ? (
        <div className="forms-container animate__animated animate__fadeIn">
          <h1
            onClick={() => {
              setStartLogging(false);
            }}
            className="close-btn"
          >
            x
          </h1>
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <h1>ENTRA</h1>
            <input
              type="text"
              name="lemail"
              value={loginValues.lemail}
              onChange={handleLoginChange}
              placeholder="Email del cuidador"
            />
            <input
              type="password"
              name="lpassword"
              value={loginValues.lpassword}
              onChange={handleLoginChange}
              placeholder="Contrase??a"
            />
            {!isLoginLoading ? (
              <button type="submit">Entra</button>
            ) : (
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </form>
        </div>
      ) : null}
      <div className="privacy-container">
        <h1>Pol??tica de privacidad</h1>

        <p>
          Pol??tica de privacidad ??ltima revisi??n: 19 de mayo de 2020 Esta
          pol??tica de privacidad ("Pol??tica") se aplica a la aplicaci??n Palmira
          La Pol??tica est?? dise??ada para informarle c??mo recopilamos y usamos la
          informaci??n personal (como se define a continuaci??n) para que pueda
          tomar una decisi??n informada sobre el uso del servicio Palmira. <br />{" "}
          <br />
          Lea esta declaraci??n antes de enviarnos cualquier informaci??n
          personal. Al usar nuestro Sitio y servicio, usted declara que: tiene
          18 a??os o m??s, est?? utilizando nuestra aplicaci??n para fines l??citos,
          y acepta las pr??cticas de recopilaci??n, uso y retenci??n de informaci??n
          descritas en esta Pol??tica. UE-EE. UU. y Suiza-EE.UU. Escudo de
          privacidad Palmira cumple con la UE-EE.UU. Marco del Escudo de
          privacidad y Suiza-EE. UU. Marco del Escudo de Privacidad seg??n lo
          establecido por el Departamento de Comercio de EE. UU. con respecto a
          la recopilaci??n, el uso y la retenci??n de informaci??n personal
          transferida desde la Uni??n Europea y Suiza a los Estados Unidos. Si
          existe alg??n conflicto entre los t??rminos de esta pol??tica de
          privacidad y los Principios del Escudo de Privacidad, prevalecer??n los
          Principios del Escudo de Privacidad. Para obtener m??s informaci??n
          sobre el programa Privacy Shield y para ver nuestra certificaci??n,
          visite https://www.privacyshield.gov/. De conformidad con los
          Principios del Escudo de privacidad, Palmira se compromete a resolver
          las quejas sobre nuestra recopilaci??n o uso de su informaci??n
          personal. <br /> <br />
          Las personas de la Uni??n Europea y Suiza que tengan consultas o quejas
          sobre nuestra pol??tica de protecci??n de la privacidad deben
          comunicarse primero con Palmira en: palmiratecuida@gmail.com EE.UU
          Palmira se compromete a cooperar con el panel establecido por las
          autoridades de protecci??n de datos (DPA) de la UE y el Comisionado
          Federal de Informaci??n y Protecci??n de Datos de Suiza, y cumplir con
          los consejos brindados por el panel y el Comisionado con respecto a
          los datos transferidos desde la UE y Suiza. El marco del Escudo de la
          privacidad UE-EE. UU. y Suiza-EE. UU. Privacy Shield Framework permite
          la transferencia de informaci??n personal a un tercero, que act??a como
          proveedor de servicios o vendedor, si se toman ciertas medidas para
          garantizar la protecci??n de la privacidad y la seguridad. En estas
          circunstancias, tomaremos todas las medidas razonables para exigir a
          cualquier tercero destinatario que proteja su informaci??n personal
          relevante para el marco del Escudo de privacidad. En los casos de
          transferencia posterior a terceros de datos de personas de la UE y
          Suiza recibidos de conformidad con el Escudo de privacidad UE-EE. UU.
          y Suiza-EE. UU., Palmira es potencialmente responsable. Derechos de
          los residentes de la UE en virtud del Reglamento general de protecci??n
          de datos <br /> <br />
          El Reglamento General de Protecci??n de Datos (GDPR) proporciona a los
          interesados ??????(usted, si utiliza el servicio Palmira) que residen en
          la Uni??n Europea ciertos derechos. Estos derechos son: <br /> <br />
          1) El derecho a ser informado. Tiene derecho a conocer los prop??sitos
          del procesamiento de sus datos personales, cu??nto tiempo se
          conservar??n y con qui??n se compartir??n. <br /> <br />
          2) El derecho de acceso. Tiene derecho a acceder a sus datos
          personales. <br /> <br />
          3) El derecho de rectificaci??n. Tiene derecho a que se rectifiquen o
          completen los datos personales inexactos si est??n incompletos. <br />{" "}
          <br />
          4) El derecho de supresi??n. Tiene derecho a que se eliminen sus datos
          personales en determinadas circunstancias, tambi??n conocido como
          ???derecho al olvido???. <br /> <br />
          5) El derecho a restringir el procesamiento. Tiene derecho a solicitar
          la limitaci??n del tratamiento de sus datos personales en determinadas
          circunstancias. <br /> <br />
          6) El derecho a la portabilidad de los datos. Tiene derecho a recibir
          los datos personales que ha proporcionado a un controlador y que se
          transmitan a otro controlador. <br /> <br />
          7) El derecho de oposici??n. Tiene derecho a oponerse al procesamiento
          de sus datos personales en determinadas circunstancias. <br /> <br />
          8) Derechos relacionados con la toma de decisiones individuales
          automatizadas y elaboraci??n de perfiles. Palmira no participa en la
          elaboraci??n de perfiles ni en la toma de decisiones individual
          automatizada. Puede ejercer los derechos anteriores enviando un correo
          electr??nico a palmiratecuida@gmail.com <br /> <br />
          ??Qu?? es la informaci??n personal? <br /> <br />
          Tal como se usa en el presente, el t??rmino "informaci??n personal"
          significa informaci??n que identifica a una persona o a partir de la
          cual se podr??a identificar a una persona (como nombre, direcci??n,
          n??mero de tel??fono, n??mero de tel??fono m??vil, direcci??n de correo
          electr??nico, n??mero de tarjeta de cr??dito u otro n??mero de cuenta) e
          informaci??n sobre la <strong>ubicaci??n</strong> o las actividades de
          esa persona, como informaci??n sobre su uso del servicio Palmira. La
          informaci??n personal tambi??n incluye datos demogr??ficos informaci??n
          espec??fica como fecha de nacimiento, g??nero, ??rea geogr??fica y
          preferencias cuando dicha informaci??n est?? vinculada a otra
          informaci??n personal que lo identifique. La informaci??n personal no
          incluye informaci??n "agregada", que son los datos que recopilamos
          sobre el uso del Sitio o el servicio o las categor??as de usuarios del
          Sitio y del servicio, de los cuales se ha eliminado cualquier
          informaci??n personal. Esta Pol??tica de ninguna manera limita o
          restringe nuestra recopilaci??n de informaci??n agregada. <br /> <br />
          ??Qu?? informaci??n personal recopilamos? <br /> <br />
          La informaci??n personal se puede recopilar de varias maneras cuando
          utiliza los diversos servicios y actividades disponibles a trav??s del
          Sitio y el servicio de Palmira. En varios lugares de nuestra
          aplicaci??n m??vil, podemos recopilar cierta informaci??n que nos
          proporciona voluntariamente que puede contener informaci??n personal,
          como la informaci??n de contacto de su destinatario, p. nombre,
          apellido, direcci??n de correo electr??nico y/o n??mero de tel??fono.
          Cuando utiliza nuestra aplicaci??n, tiene la opci??n de proporcionarnos
          un nombre de usuario.{" "}
          <strong>
            Cuando est?? encendido y con Palmira activo o en segundo plano
          </strong>
          , la aplicaci??n Palmira recopilar?? autom??ticamente informaci??n de{" "}
          <strong>ubicaci??n</strong> de su dispositivo m??vil. Tratamos la
          informaci??n recopilada junto con la aplicaci??n como informaci??n
          personal si la combinamos o la vinculamos con cualquiera de la
          informaci??n de identificaci??n mencionada anteriormente. A menos que
          nos indique que actuemos de otra manera, Palmira almacena la
          informaci??n de su <strong>ubicaci??n</strong> personal. Si ya no desea
          permitirnos recopilar y usar su informaci??n de{" "}
          <strong>ubicaci??n</strong>, puede suspender el uso del servicio.
          Archivos de registro Como sucede con la mayor??a de los sitios web,
          recopilamos cierta informaci??n autom??ticamente y la almacenamos en
          archivos de registro. Esta informaci??n puede incluir direcciones de
          protocolo de Internet (IP), tipo de navegador, proveedor de servicios
          de Internet (ISP), p??ginas de referencia/salida, sistema operativo,
          sello de fecha/hora y/o datos de flujo de clics. No vinculamos estos
          datos recopilados autom??ticamente con otra informaci??n que recopilamos
          sobre usted. <br /> <br />
          An??lisis m??vil <br /> <br />
          Utilizamos software de an??lisis m??vil para permitirnos comprender
          mejor la funcionalidad de nuestro Software m??vil en su tel??fono. Este
          software puede registrar informaci??n como la frecuencia con la que usa
          la aplicaci??n, los eventos que ocurren dentro de la aplicaci??n, el uso
          agregado, los datos de rendimiento y desde d??nde se descarg?? la
          aplicaci??n. No vinculamos la informaci??n que almacenamos dentro del
          software de an??lisis con ninguna informaci??n de identificaci??n
          personal que env??e dentro de la aplicaci??n m??vil. <br /> <br />
          Notificaciones push
          <br /> <br />
          Es posible que le enviemos notificaciones autom??ticas de vez en cuando
          para actualizarlo. sobre cualquier actualizaci??n, evento o promoci??n
          que podamos estar realizando. Si no desea recibir este tipo de
          comunicaciones, puede desactivarlas a nivel de dispositivo. Para
          garantizar que reciba las notificaciones adecuadas, necesitaremos
          recopilar cierta informaci??n sobre su dispositivo, como el sistema
          operativo y la informaci??n de identificaci??n del usuario. <br />{" "}
          <br /> Uso y divulgaci??n <br /> <br /> En general, usamos la
          informaci??n personal que podemos recopilar (como su nombre,{" "}
          <strong>ubicaci??n</strong>) para facilitar su uso de la aplicaci??n
          m??vil y el servicio Palmira, para brindarle la informaci??n, los
          productos y los servicios que solicita, para administrar y ayudar.
          nosotros con el funcionamiento del Sitio, nuestra aplicaci??n y para
          cualquier otro prop??sito para el cual se proporcion?? la informaci??n.
          Por ejemplo, podemos usar la informaci??n que recopilamos: <br />{" "}
          <br />??? para responder a sus correos electr??nicos, env??os,
          comentarios, solicitudes o quejas; <br /> <br />??? para asegurarse de
          que la aplicaci??n funciona correctamente y de que recibe la versi??n
          m??s reciente; <br /> <br />??? para permitir que otros usuarios del
          servicio que usted designe vean temporalmente su paradero en tiempo
          real; <br /> <br />??? para solicitar comentarios y permitirnos
          desarrollar, personalizar y mejorar el Sitio y nuestra informaci??n y
          servicios; y <br /> <br />??? para el prop??sito espec??fico para el cual
          se proporcion?? la informaci??n. <br /> <br />
          ??Qu?? informaci??n personal compartimos con terceros? <br /> <br />
          No vendemos, compartimos ni alquilamos ninguna informaci??n personal a
          terceros de ninguna manera diferente a lo que se divulga en esta
          Pol??tica. Solamente se almacena la informaci??n en un servicio de base
          de datos externo. Podemos divulgar informaci??n personal cuando estemos
          obligados a cumplir con la ley (por ejemplo, una citaci??n legal, orden
          judicial u orden judicial); para hacer cumplir o aplicar esta pol??tica
          de privacidad o nuestras otras pol??ticas o acuerdos; para iniciar,
          rendir, facturar y cobrar los montos que se nos adeudan; para proteger
          nuestros derechos, propiedad o seguridad o los de nuestros clientes;
          para proteger a nuestros clientes del uso fraudulento, abusivo o
          ilegal de nuestra aplicaci??n; o si creemos que una emergencia que
          implica el peligro de muerte o lesiones f??sicas graves para cualquier
          persona requiere la divulgaci??n de las comunicaciones o justifica la
          divulgaci??n de informaci??n personal. Adem??s, la informaci??n sobre
          nuestros clientes, incluida la informaci??n personal, puede divulgarse
          como parte de cualquier fusi??n o adquisici??n. ??D??nde se almacena su
          informaci??n? Palmira. tiene su sede en Espa??a y, por lo tanto,
          cualquier informaci??n que recopilemos sobre usted o que nos
          proporcione puede transferirse a Espa??a. Algunos de nuestros
          proveedores de servicios tambi??n pueden estar ubicados en los Estados
          Unidos o en otros pa??ses. Si est?? utilizando la aplicaci??n en los
          estados unidos, acepta que su informaci??n personal se transfiera fuera
          de los estados unidos, incluso a pa??ses donde puede tener menos
          derechos legales. Su informaci??n personal se mantiene estrictamente
          confidencial y no se compartir?? ni vender?? a terceros que no sean como
          se describe expresamente en esta Pol??tica de privacidad (consulte
          "??Qu?? informaci??n personal compartimos con terceros?"), o a su usuario
          Palmira. Si nos proporciona sus datos de contacto como parte de su uso
          del Sitio o la aplicaci??n, podemos enviarle noticias y actualizaciones
          de productos relacionadas con Palmira. Palmira limita el uso de su
          informaci??n personal a los fines indicados en este documento. <br />{" "}
          <br />
          ??C??mo puede corregir y actualizar su informaci??n personal u obtener
          informaci??n adicional? <br /> <br />
          Si lo solicita, le proporcionaremos informaci??n sobre si conservamos
          su informaci??n personal. Si tiene alguna pregunta o comentario sobre
          esta Pol??tica o las pr??cticas relacionadas con nuestro servicio,
          cont??ctenos en palmiratecuida@gmail.com. Si desea verificar, corregir
          o eliminar cualquiera de sus datos personales que pueda recopilar
          Palmira, env??e su solicitud por correo electr??nico a
          palmiratecuida@gmail.com. Todas las solicitudes enviadas a
          palmiratecuida@gmail.com se procesar??n dentro de un plazo razonable.{" "}
          <br /> <br />
          Retenci??n de datos <br /> <br /> Cualquier informaci??n proporcionada
          por usted en relaci??n con una cuenta de usuario de Palmira se
          conservar?? mientras su cuenta est?? activa o seg??n sea necesario para
          brindarle servicios. Podemos retener y usar su informaci??n seg??n sea
          necesario para cumplir con nuestras obligaciones legales, resolver
          disputas y hacer cumplir nuestros acuerdos. Es posible que se le
          solicite a Palmira que divulgue informaci??n personal en respuesta a
          solicitudes legales de las autoridades p??blicas, incluso para cumplir
          con los requisitos de seguridad nacional o de aplicaci??n de la ley.
          Residentes de California: A partir del 1 de enero de 2020, en virtud
          de la Ley de Privacidad del Consumidor de California (CCPA), los
          residentes de California tienen derecho a solicitar la siguiente
          informaci??n de Palmira enviando un correo electr??nico a Palmira a
          palmiratecuida@gmail.com y Palmira le proporcionar?? dicha informaci??n
          una vez que verifique su solicitud. : <br /> <br />??? Las categor??as de
          informaci??n personal que Palmira recopila sobre usted; <br /> <br />???
          Las categor??as de fuentes de las que se recopila su informaci??n
          personal; <br /> <br />??? El prop??sito comercial para recopilar su
          informaci??n personal; <br /> <br />??? Las categor??as de terceros con
          quienes Palmira comparte su informaci??n personal; y <br /> <br /> ???
          Los datos personales espec??ficos que Palmira ha recopilado sobre
          usted. <br /> <br />
          Adem??s, puede encontrar la siguiente informaci??n en las secciones
          correspondientes de la Pol??tica de privacidad de Palmira: Si opta por
          ejercer alguno de sus derechos en virtud de la CCPA, Palmira no negar??
          los servicios, no proporcionar?? un precio o tarifa diferente para
          nuestros servicios, ni le brindar?? un nivel de servicio diferente
          porque usted ejerci?? dichos derechos. Seg??n la definici??n actual de
          CCPA, Palmira no vende su informaci??n personal. <br /> <br />
          Ventas de informaci??n personal <br /> <br /> En los doce (12) meses
          anteriores, Palmira no ha vendido informaci??n personal. Seg??n la
          definici??n actual de CCPA, Palmira no vende ninguna informaci??n
          personal. <br /> <br />
          Derechos de solicitud de eliminaci??n <br /> <br />
          Tiene derecho a solicitar que Palmira elimine cualquier parte de su
          informaci??n personal que hayamos recopilado y retenido, sujeto a
          ciertas excepciones. Una vez que recibamos y confirmemos su solicitud
          de consumidor verificable (consulte Ejercicio de los derechos de
          acceso, portabilidad de datos y eliminaci??n), eliminaremos (e
          indicaremos a nuestros proveedores de servicios que eliminen) su
          informaci??n personal de nuestros registros, a menos que se aplique una
          excepci??n. Podemos denegar su solicitud de eliminaci??n si es necesario
          que nosotros o nuestro(s) proveedor(es) de servicios retengamos la
          informaci??n para: <br /> <br />
          1. Completar la transacci??n para la cual recopilamos la informaci??n
          personal, brindar un servicio que solicit??, tomar medidas
          razonablemente anticipadas dentro del contexto de nuestra relaci??n
          comercial en curso con usted o cumplir nuestro contrato con usted.{" "}
          <br /> <br />
          2. Detectar incidentes de seguridad, proteger contra actividades
          maliciosas, enga??osas, fraudulentas o ilegales, o enjuiciar a los
          responsables de tales actividades. <br /> <br /> 3. Depurar productos
          para identificar y reparar errores que perjudiquen la funcionalidad
          prevista existente. <br /> <br />
          4. Ejercer la libertad de expresi??n, garantizar el derecho de otro
          consumidor a ejercer sus derechos de libertad de expresi??n, o ejercer
          otro derecho previsto en el c??digo legislativo. <br /> <br />
          5. Cumplir con la Ley de Privacidad de Comunicaciones Electr??nicas de
          California (Cal. Penal Code ?? 1546 et. seq.). <br /> <br />
          6. Participar en investigaciones cient??ficas, hist??ricas o
          estad??sticas p??blicas o revisadas por pares en inter??s p??blico que se
          adhieran a todas las dem??s leyes de ??tica y privacidad aplicables,
          cuando la eliminaci??n de la informaci??n probablemente imposibilite o
          perjudique gravemente el logro de la investigaci??n, si usted
          proporcion?? previamente consentimiento informado. <br /> <br />
          7. Permitir ??nicamente usos internos que est??n razonablemente
          alineados con las expectativas del consumidor en funci??n de su
          relaci??n con nosotros. <br /> <br />
          8. Cumplir con una obligaci??n legal. <br /> <br />
          9. Hacer otros usos internos y l??citos de esa informaci??n que sean
          compatibles con el contexto en el que la proporcion??. <br /> <br />
          Para ejercer los derechos de acceso, portabilidad de datos y
          eliminaci??n descritos anteriormente, env??enos una solicitud de
          consumidor verificable a trav??s de: <br /> <br />??? Envi??ndonos un
          correo electr??nico a palmiratecuida@gmail.com <br /> <br />
          Solo usted, o una persona registrada en la Secretar??a de Estado de
          California que autorice para actuar en su nombre, puede realizar una
          solicitud de consumidor verificable relacionada con su informaci??n
          personal. <br /> <br />
          Puede utilizar un agente autorizado para enviar una solicitud de
          informaci??n o una solicitud de eliminaci??n en su nombre. Un agente
          autorizado es una persona o empresa registrada con la Secretar??a de
          Estado de California que usted ha autorizado para actuar en su nombre
          para realizar una solicitud de informaci??n o una solicitud de
          eliminaci??n de acuerdo con la Ley de Privacidad del Consumidor de
          California. Solo puede realizar una solicitud de consumidor
          verificable de acceso o portabilidad de datos dos veces en un per??odo
          de 12 meses. <br /> <br />
          La solicitud verificable del consumidor debe: <br /> <br />???
          Proporcionar informaci??n suficiente que nos permita verificar
          razonablemente que usted es la persona sobre la que recopilamos
          informaci??n personal o un representante autorizado. <br /> <br />???
          Describir su solicitud con suficiente detalle que nos permita
          comprenderla, evaluarla y responderla adecuadamente. No podemos
          responder a su solicitud ni brindarle informaci??n personal si no
          podemos verificar su identidad o autoridad para realizar la solicitud
          y confirmar que la informaci??n personal se relaciona con usted. <br />{" "}
          <br />
          Solo utilizaremos la informaci??n personal proporcionada en una
          solicitud de consumidor verificable para verificar la identidad del
          solicitante o la autoridad para realizar la solicitud. <br /> <br />
          Tiempo y formato de respuesta <br /> <br />
          Nos esforzamos por responder a una solicitud de consumidor verificable
          dentro de los cuarenta y cinco (45) d??as posteriores a su recepci??n.
          Si requerimos m??s tiempo (hasta 90 d??as), le informaremos el motivo y
          el per??odo de extensi??n por escrito. Cualquier divulgaci??n que
          proporcionemos solo cubrir?? el per??odo de 12 meses anterior a la
          recepci??n de la solicitud verificable del consumidor. La respuesta que
          proporcionemos tambi??n explicar?? las razones por las que no podemos
          cumplir con una solicitud, si corresponde. <br /> <br />
          Para las solicitudes de portabilidad de datos, seleccionaremos un
          formato para proporcionar su informaci??n personal que sea f??cilmente
          utilizable y que le permita transmitir la informaci??n de una entidad a
          otra sin obst??culos. No cobramos una tarifa para procesar o responder
          a su solicitud de consumidor verificable a menos que sea excesiva,
          repetitiva o manifiestamente infundada. <br /> <br />
          Si determinamos que la solicitud justifica una tarifa, le informaremos
          por qu?? tomamos esa decisi??n y le proporcionaremos un costo estimado
          antes de completar su solicitud. Cambios en esta Declaraci??n de
          privacidad Podemos actualizar esta declaraci??n de privacidad para
          reflejar cambios en nuestras pr??cticas de informaci??n. <br /> <br />
          Si realizamos cambios importantes, se lo notificaremos mediante la
          publicaci??n de la pol??tica de privacidad revisada en nuestro Sitio o,
          si ha establecido una cuenta de usuario de Palmira, le enviaremos una
          notificaci??n a la direcci??n de correo electr??nico especificada en su
          cuenta. Cualquier revisi??n de nuestra pol??tica de privacidad entrar??
          en vigencia despu??s de dicha notificaci??n. <br /> <br />
          Le recomendamos que revise peri??dicamente esta p??gina para obtener la
          informaci??n m??s reciente sobre nuestras pr??cticas de privacidad.
        </p>
      </div>
    </div>
  );
};
