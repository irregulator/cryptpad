define(function () {
    var out = {};

    out._languageName = 'Español';

    out.main_title = "Cryptpad: Zero Knowledge, Editor Colaborativo en Tiempo Real";
    out.main_slogan = "La unidad es la fuerza - la colaboración es la clave";

    out.type = {};
    out.type.pad = 'Pad';
    out.type.code = 'Código';
    out.type.poll = 'Encuesta';
    out.type.slide = 'Presentación';
    out.type.whiteboard = 'Pizarra';

    out.disconnected = "Desconectado";
    out.synchronizing = "Sincronización";
    out.reconnecting = "Reconectando...";
    out.lag = "Retraso";
    out.readonly = 'Solo lectura';
    out.anonymous = 'Anónimo';
    out.yourself = "Tú mismo";
    out.anonymousUsers = "usuarios anónimos";
    out.anonymousUser = "usuario anónimo";
    out.users = "Usuarios";
    out.and = "y";
    out.viewer = "espectador";
    out.viewers = "espectadores";
    out.editor = "editor";
    out.editors = "editores";

    out.greenLight = "Todo funciona bién";
    out.orangeLight = "La conexión es lenta y podria impactar la experiencia";
    out.redLight = "Has sido desconectado de la sesión";

    out.importButtonTitle = 'Importar un documento de tus archivos locales';

    out.exportButtonTitle = 'Exportar este documento a un archivo local';
    out.exportPrompt = '¿Cómo te gustaría llamar a este archivo?';

    out.changeNamePrompt = 'Cambiar tu nombre (dejar vacío para ser anónimo): ';

    out.clickToEdit = "Haz clic para cambiar";

    out.forgetButtonTitle = 'Eliminar este documento de la lista en la pagina de inicio';
    out.forgetPrompt = 'Pulser OK eliminará este documento del almacenamiento local (localStorage), ¿estás seguro?';

    out.shareButton = 'Compartir';
    out.shareSuccess = 'URL copiada al portapapeles';

    out.presentButtonTitle = "Entrar en el modo presentación";
    out.presentSuccess = 'ESC para salir del modo presentación';

    out.backgroundButtonTitle = 'Cambiar el color de fondo en el modo presentación';
    out.colorButtonTitle = 'Cambiar el color de texto en el modo presentación';

    out.editShare = "URL de edición compartida";
    out.editShareTitle = "Copiar la URL de edición al portapapeles";
    out.viewShare = "Compartir URL de solo lectura";
    out.viewShareTitle = "Copiar la URL de solo lectura al portapapeles";
    out.viewOpen = "Ver en pestaña nueva";
    out.viewOpenTitle = "Abrir el documento en solo lectura en una pestaña nueva";

    out.notifyJoined = "{0} se ha unido a la sesión de colaboración";
    out.notifyRenamed = "{0} ahora se conoce como {1}";
    out.notifyLeft = "{0} ha dejado la sesión de colaboración";

    out.tryIt = '¡Pruébalo!';

    out.okButton = 'OK (Enter)';
    out.cancelButton = 'Cancelar (Esc)';

    // Polls

    out.poll_title = "Selector de fecha Zero Knowledge";
    out.poll_subtitle = "Agenda en <em>tiempo real</em> Zero Knowledge";

    out.poll_p_save = "Tus configuraciones se actualizan instantaneamente, no es necesario guardar cambios.";
    out.poll_p_encryption = "Todos los datos entrados son cifrados, solo las personas que poseen el enlace tienen acceso. Incluso el servidor no puede ver el contenido.";

    out.wizardLog = "Presiona el boton en la parte superior izquierda para volver a la encuesta";
    out.wizardTitle = "Utiliza el asistente para crear tu encuesta";
    out.wizardConfirm = "¿Estás realmente seguro de agregar estas opciones a tu encuesta?";

    out.poll_closeWizardButton = "Cerrar el asistente";
    out.poll_closeWizardButtonTitle = "Cerrar el asistente";
    out.poll_wizardComputeButton = "Generar opciones";
    out.poll_wizardClearButton = "Limpiar tabla";
    out.poll_wizardDescription = "Automaticamente crear opciones ingresando cualquier cantidad de fechas y horas";
    out.poll_wizardAddDateButton = "+ Fechas";
    out.poll_wizardAddTimeButton = "+ Horas";

    out.poll_optionPlaceholder = "Opción";
    out.poll_userPlaceholder = "Tu nombre";
    out.poll_removeOption = "¿Estás seguro que quieres eliminar esta opción?";
    out.poll_removeUser = "¿Estás seguro que quieres eliminar este usuario?";

    out.poll_titleHint = "Título";
    out.poll_descriptionHint = "Descripción";

    // index.html

    out.main_p2 = 'Este proyecto utiliza el editor de texto visual <a href="http://ckeditor.com/">CKEditor</a>, <a href="https://codemirror.net/">CodeMirror</a>, y el motor en tiempo real <a href="https://github.com/xwiki-contrib/chainpad">ChainPad</a>.';
    out.main_howitworks = '¿Cómo funciona?';
    out.main_howitworks_p1 = "CryptPad utiliza una variante del algoritmo de <a href='https://en.wikipedia.org/wiki/Operational_transformation'>transformación operacional</a> (página en inglés) que es capaz de encontrar un consenso distribuido usando un <a href='https://bitcoin.org/bitcoin.pdf'>Blockchain Nakamoto</a> (página en inglés), popularizado por <a href='https://es.wikipedia.org/wiki/Bitcoin'>Bitcoin</a>. De esta manera el algoritmo puede evitar la necesidad de un servidor central para resolver conflictos de edición de la transformación operacional y sin necesidad de resolver conflictos, el servidor puede mantenerse inconsciente del contenido que se está editando en el pad.";
    out.main_about_p2 = 'Si tienes preguntas o comentarios, puedes <a href="https://twitter.com/cryptpad">enviarnos un tweet</a>, abrir un issue <a href="https://github.com/xwiki-labs/cryptpad/issues/" title="nuestro issue tracker">en GitHub</a>, saludarnos en nuestro canal IRC (<a href="http://webchat.freenode.net?channels=%23cryptpad&uio=MT1mYWxzZSY5PXRydWUmMTE9Mjg3JjE1PXRydWUe7" title="freenode webchat">irc.freenode.net</a>), o <a href="mailto:research@xwiki.com">envianos un email</a>.';

    out.button_newpad = 'Crear nuevo pad de texto enriquezido';
    out.button_newcode = 'Crear nuevo pad de código';
    out.button_newpoll = 'Crear nueva encuesta';
    out.button_newslide = 'Crear nueva presentación';

    // privacy.html

    out.policy_title = 'Política de privacidad Cryptpad';
    out.policy_whatweknow = 'Qué sabemos sobre tí';
    out.policy_whatweknow_p1 = 'Como cualquier aplicación que está en la red, Cryptpad tiene acceso a los metadatos expuestos por el protócolo HTTP. Esto incluye tu dirección IP, y otros headers HTTP que pueden ser utilizados para identificar a tu navegador propio. Puedes ver la información que comparte tu navegador visitando <a target="_blank" rel="noopener noreferrer" href="https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending" title="Que headers HTTP esta compartiendo mi navegador">WhatIsMyBrowser.com</a> (página en inglés).';
    out.policy_whatweknow_p2 = 'Nosotros usamos <a href="https://piwik.org/" target="_blank" rel="noopener noreferrer" title="open source analytics platform">Piwik</a>, una plataforma de analítica de datos abierta, para mejor conocer a nuestros usuarios. Piwik nos dice como encontráste Cryptpad, en entrada manual, por un motor de busquéda, or por referal de otra página como Reddit o Twitter. También aprendemos cuándo visitas, que páginas vees en nuestra web, y cuánto tiempo te quedas en cada una.';
    out.policy_howweuse = 'Cómo usamos lo que aprendemos';
    out.policy_howweuse_p1 = 'Usamos esta información para tomar mejores decisiones para promocionar Cryptpad, para evaluar cuáles de nuestros esfuerzos han sido exitosos. La información sobre tu ubicación nos permite saber si deberíamos considerar mejor soporte para idiomas diferentes al inglés.';
    out.policy_howweuse_p2 = "La información sobre tu navegador (en escritorio u movil) nos ayuda a saber qué caracteristicas que debemos mejorar. Nuestro equipo de desarrollo es pequeño, e intentamos tomar decisiones que beneficien a la experiencia de la mayoria de nuestros usuarios.";
    out.policy_whatwetell = 'Lo que decimos a otros sobre tí';
    out.policy_whatwetell_p1 = 'No suministramos la información que colectamos a terceros a menos de ser legalmente obligados a hacerlo.';
    out.policy_links = 'Enlaces a otras páginas';
    out.policy_links_p1 = 'Esta web contiene enlaces a otros sitios, incluyendo algunos producidos por otras organizaciones. No somos responsables por el tratamiento de la privacidad de los datos y el contenido de páginas externas. Como regla general, los enlaces externos se abren en una nueva pestaña del navegador, para clarificar que estás abandonando a Cryptpad.fr.';
    out.policy_ads = 'Anuncios';
    out.policy_ads_p1 = 'Nosotros no mostramos anuncios, pero podemos poner enlaces a las organizaciones que financian nuestro trabajo de investigación.';
    out.policy_choices = 'Lo que puedes hacer';
    out.policy_choices_open = 'Nuestro código fuente es abierto para que siempre tengas la opción de desplegar tu propia instancia de Cryptpad.';
    out.policy_choices_vpn = 'Si deseas utilizar nuestra instancia, pero no deseas exponer tu dirección IP, puedes protegerla utilizando <a href="https://www.torproject.org/projects/torbrowser.html.en" title="descargas Tor project" target="_blank" rel="noopener noreferrer">el navegador Tor</a>, o un <a href="https://riseup.net/en/vpn" title="VPNs por Riseup" target="_blank" rel="noopener noreferrer">VPN</a>.';
    out.policy_choices_ads = 'Si deseas no ser seguido por nuestra plataforma, puedes utilizar herramientas como <a href="https://www.eff.org/privacybadger" title="descargar a Privacy Badger" target="_blank" rel="noopener noreferrer">Privacy Badger</a>.';

    // terms.html

    out.tos_title = "Condiciones de servicio Cryptpad";
    out.tos_legal = "Por favor, no seas malicioso, abusivo o hagas algo ilegal.";
    out.tos_availability = "Esperamos que este servicio te parezca util, pero nuestra disponibilidad o rendimiento no pueden ser garantizados. Por favor, exporta tus datos regularmente.";
    out.tos_e2ee = "Los documentos Cryptpad pueden ser leidos o modificados por cualquiera que pueda adivinar o que pueda tener el enlace. Recomendamos que utilizes mensajes cifrados de punto a punto (e2ee) para compartir URLs, no asumimos ninguna responsabilidad en el evento de alguna fuga.";
    out.tos_logs = "Los metadatos entregados por el navegador al servidor pueden ser almacenados para la mantenencia del servicio.";
    out.tos_3rdparties = "No proveemos datos individualizados a terceros a menos de ser obligados por la ley.";

    // BottomBar.html

    out.bottom_france = '<a href="http://www.xwiki.com/" target="_blank" rel="noopener noreferrer">Hecho con <img class="bottom-bar-heart" src="/customize/heart.png" alt="amor" /> en <img class="bottom-bar-fr" src="/customize/fr.png" alt="Francia" /></a>';
    out.bottom_support = '<a href="http://labs.xwiki.com/" title="XWiki Labs" target="_blank" rel="noopener noreferrer">Un <img src="/customize/logo-xwiki2.png" alt="XWiki SAS" class="bottom-bar-xwiki"/>Proyecto Labs</a> con el soporte de <a href="http://ng.open-paas.org/" title="OpenPaaS::ng" target="_blank" rel="noopener noreferrer"><img src="/customize/openpaasng.png" alt="OpenPaaS-ng" class="bottom-bar-openpaas" /></a>';

    // Header.html

    out.header_france = '<a href="http://www.xwiki.com/" target="_blank" rel="noopener noreferrer">Con <img class="bottom-bar-heart" src="/customize/heart.png" alt="amor" /> de <img class="bottom-bar-fr" src="/customize/fr.png" title="France" alt="Francia"/> por <img src="/customize/logo-xwiki.png" alt="XWiki SAS" class="bottom-bar-xwiki"/></a>';
    out.header_support = '<a href="http://ng.open-paas.org/" title="OpenPaaS::ng" target="_blank" rel="noopener noreferre-r"> <img src="/customize/openpaasng.png" alt="OpenPaaS-ng" class="bottom-bar-openpaas" /></a>';
    out.header_logoTitle = 'Ir a la página principal';

    out.websocketError = "Error al conectarse al servidor WebSocket";
    out.typeError = "Este documento no es compatible con la applicación seleccionada";
    out.onLogout = "Tu sesión está cerrada, <a href=\"/\" target=\"_blank\">haz clic aquí</a> para iniciar sesión<br>o apreta sobre <em>Escape</em> para acceder al documento en modo solo lectura.";
    out.loading = "Cargando...";
    out.error = "Error";
    out.language = "Idioma";
    out.user_rename = "Cambiar nombre";
    out.user_displayName = "Nombre visible";
    out.user_accountName = "Nombre de cuenta";
    out.newButton = "Nuevo";
    out.newButtonTitle = "Nuevo documento";
    out.cancel = "Cancelar";
    out.poll_publish_button = "Publicar";
    out.poll_admin_button = "Administrar";
    out.poll_create_user = "Añadir usuario";
    out.poll_create_option = "Añadir opción";
    out.poll_commit = "Validar";
    out.fm_rootName = "Documentos";
    out.fm_trashName = "Papelera";
    out.fm_unsortedName = "Sin organizar";
    out.fm_filesDataName = "Todos los archivos";
    out.fm_templateName = "Plantilla";
    out.fm_newButton = "Nuevo";
    out.fm_newFolder = "Nueva carpeta";
    out.fm_folder = "Carpeta";
    out.fm_folderName = "Nombre de carpeta";
    out.fm_numberOfFolders = "# de carpetas";
    out.fm_numberOfFiles = "# de archivos";
    out.fm_fileName = "Nombre";
    out.fm_title = "Título";
    out.fm_lastAccess = "Último acceso";
    out.fm_creation = "Creación";
    out.fm_forbidden = "Acción prohibida";
    out.fm_originalPath = "Enlace original";
    out.fm_noname = "Documento sín título";
    out.fm_emptyTrashDialog = "¿Seguro qué quieres vaciar la papelera?";
    out.fm_removeSeveralPermanentlyDialog = "¿Seguro qué quieres eliminar estos {0} elementos de la papelera para siempre?";
    out.fm_removePermanentlyDialog = "¿Seguro qué quieres eliminar este elemento para siempre?";
    out.fm_removeSeveralDialog = "¿Seguro qué quieres mover estos {0} elementos a la papelera?";
    out.fm_removeDialog = "¿Seguro qué quieres mover {0} a la papelera?";
    out.fm_restoreDialog = "¿Seguro que quieres recuperar {0}?";
    out.fm_unknownFolderError = "La carpeta seleccionada ya no existe. Abriendo la carpeta anterior...";
    out.fm_contextMenuError = "No se puedo abrir el menú para este elemento. Si persiste el problema, recarga la página.";
    out.fm_selectError = "No se puedo abrir el elemento. Si persiste el problema, recarga la página.";
    out.fm_info_root = "Crea carpetas aquí para organizar tus documentos.";
    out.fm_info_unsorted = "Contiene todos los documentos que has visitado que no estan organizados en \"Documentos\" o movidos a la \"Papelera\".";
    out.fm_info_template = "Contiene todas las plantillas que puedes volver a usar para crear nuevos documentos.";
    out.fm_info_allFiles = "Contiene todos los archivos de \"Documentos\", \"Sin organizar\" y \"Papelera\". No puedes mover o eliminar archivos aquí.";
    out.fm_alert_backupUrl = "Enlace de copia de seguridad para este drive. Te recomendamos <strong>muy fuertemente</strong> que lo guardes secreto.<br>Lo puedes usar para recuparar todos tus archivos en el caso que la memoria de tu navegador se borre.<br>Cualquiera con este enlace puede editar o eliminar todos los archivos en el explorador.<br>";
    out.fm_backup_title = "Enlace de copia de seguridad";
    out.fm_nameFile = "¿Cómo quieres nombrar este archivo?";
    out.fc_newfolder = "Nueva carpeta";
    out.fc_rename = "Cambiar nombre";
    out.fc_open = "Abrir";
    out.fc_open_ro = "Abrir (solo lectura)";
    out.fc_delete = "Eliminar";
    out.fc_restore = "Recuperar";
    out.fc_remove = "Eliminar para siempre";
    out.fc_empty = "Vaciar la papelera";
    out.fc_prop = "Propriedades";
    out.fo_moveUnsortedError = "No puedes mover una carpeta en la lista de documentos no organizados";
    out.fo_existingNameError = "Nombre ya utilizado en esta carpeta. Por favor elige otro.";
    out.fo_moveFolderToChildError = "No puedes mover una carpeta en una de sus subcarpetas";
    out.fo_unableToRestore = "No se pudo restaurar este archivo a la localización de orígen. Puedes intentar moverlo a otra localización.";
    out.fo_unavailableName = "Un archivo o carpeta ya tiene este nombre. Cambiálo y vuelve a intentarlo.";
    out.login_login = "Iniciar sesión";
    out.login_makeAPad = "Crear documento anónimo";
    out.login_nologin = "Ver documentos locales";
    out.login_register = "Registrarse";
    out.logoutButton = "Cerrar sesión";
    out.settingsButton = "Preferencias";
    out.login_username = "Nombre de usuario";
    out.login_password = "Contraseña";
    out.login_confirm = "Confirmar contraseña";
    out.login_remember = "Recuérdame";
    out.login_hashing = "Tratamiento de datos, esto puede tardar un poco.";
    out.login_hello = "Hola {0},";
    out.login_helloNoName = "Hola,";
    out.login_accessDrive = "Acceder a tu drive";
    out.login_orNoLogin = "o";
    out.login_noSuchUser = "Credenciales invalidos. Inténtalo de nuevo, o registrate";
    out.login_invalUser = "Nombre de usuario requirido";
    out.login_invalPass = "Contraseña requirida";
    out.login_unhandledError = "Un error inesperado se produjo :(";
    out.register_importRecent = "Importar historial (recomendado)";
    out.register_acceptTerms = "Accepto los <a href='/terms.html' tabindex='-1'>términos de servicio</a>";
    out.register_passwordsDontMatch = "Las contraseñas no corresponden";
    out.register_mustAcceptTerms = "Tienes que acceptar los términos de servicio";
    out.register_mustRememberPass = "No podemos reiniciar tu contraseña si la olvidas. ¡Es muy importante que la recuerdes! Marca la casilla para confirmarlo.";
    out.register_header = "Bienvenido a CryptPad";
    out.register_explanation = ["<p>Vamos a ver algunas cosas antes</p>", "<ul>", "<li>Tu contraseña es tu clave secreta que cifra todos tus documentos. Si la pierdes no podremos recuparar tus datos.</li>", "<li>Puedes importar documentos que has visto recientemente en tu navegador para tenerlos en tu cuenta.</li>", "<li>Si estás usando un ordenador compartido, tienes que cerrar sesión cuando terminas, cerrar la pestaña no es suficiente.</li>", "</ul>"].join('');
    out.settings_title = "Preferencias";
    out.settings_save = "Guardar";
    out.settings_backupTitle = "Copia de seguridad";
    out.settings_backup = "Copia de seguridad";
    out.settings_restore = "Recuparar datos";
    out.settings_resetTitle = "Limpiar tu drive";
    out.settings_reset = "Quita todos los documentos de tu CryptDrive";
    out.settings_resetPrompt = "Esta acción eliminará todos tus documentos.<br>¿Seguro que quieres continuar?<br>Introduce “<em>I love CryptPad</em>” para confirmar.";
    out.settings_resetDone = "¡Tu drive ahora está vacio!";
    out.settings_resetTips = "Consejos en CryptDrive";
    out.settings_resetTipsButton = "Restaurar consejos";
    out.settings_resetTipsDone = "Todos los consejos ahora están visibles";
    out.main_info = "<h1>Collabora en Confidencia</h1><br>Cultiva ideas juntos con documentos compartidos con tecnología <strong>Zero Knowledge</strong> que protege tu privacidad.";
    out.main_zeroKnowledge = "Zero Knowledge";
    out.main_zeroKnowledge_p = "No tienes que confiar que <em>no</em> veremos tus documentos, con la tecnología Zero Knowledge de CryptPad <em>no podemos</em>. Aprende más sobre como protegemos tu <a href=\"/privacy.html\" title='Privacidad'>Privacidad y Seguridad</a>.";
    out.main_writeItDown = "Escríbelo";
    out.main_writeItDown_p = "Los mejores proyectos vienen de las más pequeñas ideas. Escribe tus momentos de inspiración y ideas inesperadas porque nunca sabrás cual será tu próximo descubrimiento.";
    out.main_share = "Comparte el enlace, comparte el pad";
    out.main_share_p = "Cultiva ideas juntos: ten reuniones eficaces, collabora en listas y haz presentaciones rápidas en todos tus dispositivos.";
    out.main_organize = "Organizate";
    out.main_organize_p = "Con CryptPad Drive, porta tu atención en lo más importante. Carpetas te permiten organizar tus proyectos y tener una visión global de donde van las cosas.";
    out.main_richText = "Editor de Texto Enriquezido";
    out.main_richText_p = "Collabora en texto enriquezido con nuestro editor Zero Knowledge en tiempo real <a href=\"http://ckeditor.com\" target=\"_blank\">CkEditor</a>.";
    out.main_code = "Editor de código";
    out.main_code_p = "Edita código fuente para tus programas con nuestro editor Zero Knowledge en tiempo real <a href=\"https://www.codemirror.net\" target=\"_blank\">CodeMirror</a>.";
    out.main_slide = "Editor de presentación";
    out.main_slide_p = "Crea presentaciones utilizando Markdown, y visualizalos en tu navegador";
    out.main_poll = "Encuestas";
    out.main_poll_p = "Planifica tus reuniones y eventos, o vota para la mejor solución a un problema.";
    out.main_drive = "CryptDrive";
    out.footer_applications = "Applicaciones";
    out.footer_contact = "Contacto";
    out.footer_aboutUs = "Acerca de nosotros";
    out.about = "Acerca de nosotros";
    out.privacy = "Privacidad";
    out.contact = "Contacto";
    out.terms = "Términos de Servicio";

    // 1.1.0 - Bunyip
    out.movedToTrash = "Este pad fue movido a la papelera.<br><a href\"/drive/\">Acceder a mi Drive</a>";
    out.fm_newFile = "Nuevo pad";
    out.fm_type = "Típo";
    out.fm_categoryError = "No se pudo abrir la categoría seleccionada, mostrando la raíz.";
    out.settings_userFeedbackHint1 = "CryptPad suministra informaciones muy básicas al servidor, para ayudarnos a mejorar vuestra experiencia.";
    out.settings_userFeedbackHint2 = "El contenido de tu pad nunca será compartido con el servidor.";
    out.settings_userFeedback = "Activar feedback";
    out.settings_anonymous = "No has iniciado sesión. Tus ajustes se aplicarán solo a este navegador.";
    out.blog = "Blog";

    out.initialState = [
        '<span style="font-size:18px;"><p>',
        'Esto es&nbsp;<strong>CryptPad</strong>, el editor collaborativo en tiempo real Zero Knowledge. Todo está guardado cuando escribes.',
        '<br>',
        'Comparte el enlace a este pad para editar con amigos o utiliza el botón <span style="background-color:#5cb85c;color:#ffffff;">&nbsp;Compartir&nbsp;</span> para obtener un <em>enlace solo lectura</em>&nbsp;que permite leer pero no escribir.',
        '</p>',

        '<p><span style="color:#808080;"><em>',
        'Vamos, solo empezia a escribir...',
        '</em></span></p></span>',
        '<p>&nbsp;<br></p>'
    ].join('');

    out.codeInitialState = "/*\n   Esto es CryptPad, el editor collaborativo en tiempo real zero knowledge.\n   Lo que escribes aquí es cifrado, con lo cual solo las personas con el enlace pueden accederlo.\n   Incluso el servidor no puede ver lo que escribes.\n   Lo que ves aquí, lo que escuchas aquí, cuando sales, se queda aquí\n*/";
    out.slideInitialState = "# CryptSlide\n* Esto es CryptPad, el editor collaborativo en tiempo real zero knowledge.\n* Lo que escribes aquí es cifrado, con lo cual solo las personas con el enlace pueden accederlo.\n* Incluso el servidor no puede ver lo que escribes.\n* Lo que ves aquí, lo que escuchas aquí, cuando sales, se queda aquí\n\n---\n# Como utilizarlo\n1. Escribe tu contenido en Markdown\n  - Puedes aprender más sobre Markdown [aquí](http://www.markdowntutorial.com/)\n2. Separa tus slides con ---\n3. Haz clic en \"Presentar\" para ver el resultado  - Tus slides se actualizan en tiempo real";
    out.driveReadmeTitle = "¿Qué es CryptDrive?";
    out.readme_welcome = "¡Bienvenido a CryptPad!";
    out.readme_p1 = "Bienvenido a CryptPad, aquí podrás tomar nota de cosas sólo u con otra gente.";
    out.readme_p2 = "Este pad es un guía rapida para aprender a usar a CryptPad para tomar notas, organizarlas y trabajar con más personas.";
    out.readme_cat1 = "Aprende a conocer a tu CryptDrive";
    out.readme_cat1_l1 = "Crea un pad: En CryptDrive, haz clic en {0} y luego en {1} para crear un pad.";
    out.readme_cat1_l2 = "Abrir pads desde CryptDrive: haz doble clic en un icono para abrirlo.";
    out.readme_cat1_l3 = "Organiza tus pads: Cuando has iniciado sesión, cada pad que accedes se quedaran en tu drive en {0}.";
    out.readme_cat1_l3_l1 = "Puedes hacer clic y arrastrar archivos en carpetas desde {0}, y crear nuevas carpetas.";
    out.readme_cat1_l3_l2 = "Recuerda hacer clic derecho en varios iconos, ya que hay menús addicionales.";
    out.readme_cat1_l4 = "Elimina tus viejos pads: Haz clic y arrastra tus pads en la {0} de la misma manera que lo harías con carpetas.";
    out.readme_cat2 = "Haz pads como un pro";
    out.edit = "editar";
    out.view = "ver";
    out.readme_cat2_l1 = "El botón {0} en tu pad te permite dar acceso a collaboradores para {1} o {2} el pad.";
    out.readme_cat2_l2 = "Cambia el título del pad haciendo clic en el lápiz";
    out.readme_cat3 = "Descubre las apps CryptPad";
    out.readme_cat3_l1 = "Con el editor de código CryptPad, puedes collaborar en código fuente, como por ejemplo JavaScript y Markdown";
    out.readme_cat3_l2 = "Con los slides CryptPad, puedes hacer presentaciones rápidas con Markdown";
    out.readme_cat3_l3 = "Con CryptPoll puedes tomar votos rápidos, especialmente utíl para programar un horario que conviene a todo el mundo";

    // 1.2.0 - Chupacabra

    out.settings_resetError = "Verificación no válida. Tu CryptDrive no fue cambiado.";
    out.saved = "Guardado";
    out.printButton = "Imprimir";
    out.printButtonTitle = "Imprimir tu presentación o exportar a PDF";
    out.printOptions = "Opciones de impresión";
    out.printSlideNumber = "Mostrar el número de diapositiva";
    out.printDate = "Mostrar la fecha";
    out.printTitle = "Mostrar el título";
    out.printCSS = "CSS personalizado:";
    out.editOpen = "Abrir enlances de edición en pestaña nueva";
    out.editOpenTitle = "Abrir en modo edición en pestaña nueva";
    out.settings_importTitle = "Importar pads recientes locales en CryptDrive";
    out.settings_import = "Importar";
    out.settings_importConfirm = "¿Seguro qué quieres importar tus pads recientes a tu cuenta CryptDrive?";
    out.settings_importDone = "Importación terminada";

    out.tips = {};
    out.tips.lag = "El icono verde en la parte superior derecha muestra la calidad de tu connexión a CryptPad.";
    out.tips.shortcuts = "`ctrl+b`, `ctrl+i`, y `ctrl+u` son accesos rápidos para negrita, itálica y subrayado.";
    out.tips.indent = "Cuando editas listas, puedes usar tab o shift+tab para icrementar o decrementar indentación.";
    out.tips.title = "Puedes cambiar el título de tus pads en la parte superior de la pantalla.";
    out.tips.store = "Cada vez que visitas un pad con una sesión iniciada se guardará a tu CryptDrive.";
    out.tips.marker = "Puedes resaltar texto en un pad utilizando el \"marcador\" en el menú de estílo.";
    out.tips.driveUpload = "Usuarios registrados pueden subir archivos cifrados arrastrandolos hacia CryptDrive.";

    out.feedback_about = "Si estas leyendo esto, quizas estés curioso de saber porqué CryptPad solicita esta página cuando haces algunas acciones";
    out.feedback_privacy = "Nos importa tu privacidad, y al mismo tiempo queremos que CryptPad sea muy fácil de usar. Utilizamos esta página para conocer las funcionalidades que importan a nuestros usuarios, pidiendolo con un parametro que nos dice que accion fue realizada.";
    out.feedback_optout = "Si quieres darte de baja, visita <a href='/settings/'>tus preferencias</a>, donde podrás activar o desactivar feedback";

    out.fm_searchName = "Buscar";
    out.fm_searchPlaceholder = "Buscar...";
    out.fm_newButtonTitle = "Crear un nuevo pad o carpeta";
    out.fm_openParent = "Mostrar en carpeta";
    out.register_writtenPassword = "He escrito mi usuario y contraseña, continuar";
    out.register_cancel = "Volver";
    out.register_warning = "Zero Knowledge significa que no podemos recuperar tus datos si pierdes tu contraseña.";
    out.register_alreadyRegistered = "Este usuario ya existe, ¿iniciar sesión?";

    // 1.4.0 - Easter Bunny

    out.button_newwhiteboard = "Nueva Pizarra";
    out.wrongApp = "No se pudo mostrar el contenido de la sessión en tiempo real en tu navigador. Por favor, actualiza la página.";
    out.synced = "Todo está guardado.";
    out.saveTemplateButton = "Guardar como plantilla";
    out.saveTemplatePrompt = "Élige un título para la plantilla";
    out.templateSaved = "¡Plantilla guardada!";
    out.selectTemplate = "Élige una plantilla o pulsa ESC";
    out.slideOptionsTitle = "Personaliza tus diapositivas";
    out.slideOptionsButton = "Guardar (enter)";
    out.canvas_clear = "Limpiar";
    out.canvas_delete = "Borrar selección";
    out.canvas_disable = "No permitir dibujos";
    out.canvas_enable = "Permitir dibujos";
    out.canvas_width = "Talla";
    out.canvas_opacity = "Opacidad";
    out.settings_publicSigningKey = "Clave de Firma Pública";
    out.settings_usage = "Utilización";
    out.settings_usageTitle = "Vee el uso total de tus pads en MB";
    out.settings_pinningNotAvailable = "Los pads pegados solo están disponibles para usuarios registrados.";
    out.settings_pinningError = "Algo salió mal";
    out.settings_usageAmount = "Tus pads pegados utilizan {0}MB";
    out.historyButton = "Mostrar el historial del documento";
    out.history_next = "Ir a la versión anterior";
    out.history_prev = "Ir a la versión posterior";
    out.history_goTo = "Ir a la versión seleccionada";
    out.history_close = "Volver";
    out.history_closeTitle = "Cerrar el historial";
    out.history_restore = "Restaurar";
    out.history_restoreTitle = "Restaurar la versión seleccionada del documento";
    out.history_restorePrompt = "¿Estás seguro que quieres cambiar la versión actual del documento por esta?";
    out.history_restoreDone = "Documento restaurado";
    out.fc_sizeInKilobytes = "Talla en Kilobytes";

    // 1.5.0/1.6.0 - Fenrir/Grootslang

    out.deleted = "El pad fue borrado de tu CryptDrive";
    out.upgrade = "Mejorar";
    out.upgradeTitle = "Mejora tu cuenta para obtener más espacio";
    out.upgradeAccount = "Mejorar cuenta";

    out.MB = "MB";
    out.GB = "GB";
    out.KB = "KB";
    out.formattedMB = "{0} MB";
    out.formattedGB = "{0} GB";
    out.formattedKB = "{0} KB";

    out.pinLimitReached = "Has llegado al limite de espacio";
    out.pinLimitNotPinned = "Has llegado al limite de espacio.<br>Este pad no estará presente en tu CryptDrive.";
    out.pinLimitDrive = "Has llegado al limite de espacio.<br>No puedes crear nuevos pads.";
    out.printTransition = "Activar transiciones";
    out.history_version = "Versión: ";
    out.settings_logoutEverywhereTitle = "Cerrar sessión en todas partes";
    out.settings_logoutEverywhere = "Cerrar todas las otras sessiones";
    out.settings_logoutEverywhereConfirm = "¿Estás seguro? Tendrás que volver a iniciar sessión con todos tus dispositivos.";
    out.upload_serverError = "Error: no pudimos subir tu archivo.";
    out.upload_uploadPending = "Ya tienes una subida en progreso. ¿Cancelar y subir el nuevo archivo?";
    out.upload_success = "Tu archivo ({0}) ha sido subido con éxito y fue añadido a tu drive.";

    // 1.7.0 - Hodag
    out.comingSoon = "Próximamente...";
    out.newVersion = ["<b>CryptPad ha sido actualizado!</b>",
        "Puedes ver lo que ha cambiado aquí (en inglés):",
        "<a href=\"https://github.com/xwiki-labs/cryptpad/releases/tag/{0}\" target=\"_blank\">Notas de versión para CryptPad {0}</a>"].join("<br>");
    out.pinLimitReachedAlertNoAccounts = "Has llegado a tu limite de espacio";
    out.previewButtonTitle = "Mostrar/esconder la vista previa Markdown";
    out.fm_info_anonymous = "No estás conectado, así que estos pads pueden ser borrados (<a href=\"https://blog.cryptpad.fr/2017/05/17/You-gotta-log-in/\" target=\"_blank\">¿por qué?</a>). <a href=\"/register/\">Registrate</a> o <a href=\"/login/\">Inicia sesión</a> para asegurarlos.";
    out.fm_alert_anonymous = "Hola, estás usando CryptPad anónimamente. Está bien, pero tus pads pueden ser borrados después de un périodo de inactividad. Hemos desactivado funciones avanzadas de CryptDrive para usuarios anónimos porque queremos ser claros que no es un lugar seguro para almacenar cosas. Puedes <a href=\"https://blog.cryptpad.fr/2017/05/17/You-gotta-log-in/\" target=\"_blank\">leer este articulo</a> (en inglés) sobre por qué hacemos esto y por qué deberías <a href=\"/register/\">Registrarte</a> e <a href=\"/login/\">Iniciar sesión</a>.";
    out.fm_error_cantPin = "Error del servidor. Por favor, recarga la página e intentalo de nuevo.";
    out.upload_notEnoughSpace = "No tienes suficiente espacio para este archivo en tu CryptDrive";
    out.upload_tooLarge = "Este archivo supera el límite de carga.";
    out.upload_choose = "Escoge un archivo";
    out.upload_pending = "Esperando";
    out.upload_cancelled = "Cancelado";
    out.upload_name = "Nombre";
    out.upload_size = "Tamaño";
    out.upload_progress = "Progreso";
    out.download_button = "Descifrar y descargar";
    out.warn_notPinned = "Este pad no está en ningun CryptDrive. Expirará después de 3 meses. <a href='/about.html#pinning'>Acerca de...</a>";

    out.poll_remove = "Quitar";
    out.poll_edit = "Editar";
    out.poll_locked = "Cerrado";
    out.poll_unlocked = "Abierto";

    out.poll_show_help_button = "Mostrar ayuda";
    out.poll_hide_help_button = "Esconder ayuda";

    // 1.8.0 - Idopogo

    out.common_connectionLost = "<b>Connexión perdida</b><br>El documento está ahora en modo solo lectura hasta que la conexión vuelva.";
    out.updated_0_common_connectionLost = out.common_connectionLost;
    out.supportCryptpad = "Ayudar a CryptPad";
    out.pinLimitReachedAlert = ["Has llegado a tu limite de espacio. Nuevos pads no serán guardados en tu CryptDrive.",
        "Puedes eliminar pads de tu CryptDrive o <a href=\"https://accounts.cryptpad.fr/#!on={0}\" target=\"_blank\">suscribirte a una oferta premium</a> para obtener más espacio."].join("<br>");
    out.updated_0_pinLimitReachedAlert = out.pinLimitReachedAlert;
    out.fm_info_trash = "Vacía tu papelera para liberar espaci en tu CryptDrive.";
    out.updated_0_fm_info_trash = out.fm_info_trash;

    out.fs_migration = "Tu CryptDrive fue actualizado a una nueva versión.<br><strong>Por favor, recarga la página.</strong>";
    out.login_notRegistered = "¿No estás registrado?";
    out.upload_mustLogin = "Tienes que estar conectado para subir archivos";

    out.uploadButton = "Subir";
    out.uploadButtonTitle = "Subir un archivo a la carpeta";
    out.filePickerButton = "Incrustar un archivo";
    out.filePicker_close = "Cerrar";
    out.filePicker_description = "Elige un archivo de tu CryptDrive para incrustarlo o sube uno nuevo";
    out.filePicker_filter = "Filtrar por nombre";
    out.or = "o";
    out.languageButton = "Lenguaje";
    out.languageButtonTitle = "Elige el lenguaje para resaltado de sintaxis";
    out.themeButton = "Tema";
    out.themeButtonTitle = "Selecciona el tema de color para los editores de código y presentación";
    out.canvas_opacityLabel = "Opacidad: {0}";
    out.canvas_widthLabel = "Talla: {0}";

    return out;
});
