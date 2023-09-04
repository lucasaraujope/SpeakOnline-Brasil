$(function () {
  $(".br").click(function () {
    //cabeçalho
    $(".menu__web ul:nth-child(1) li:nth-child(1) a").text("Início");
    $(".menu__web ul:nth-child(1) li:nth-child(2) a").text("Planos");
    $(".menu__web ul:nth-child(1) li:nth-child(3) a").text("Sobre Nós");
    $(".menu__web ul:nth-child(1) li:nth-child(4) a").text("Materiais");
    $(".menu__web ul:nth-child(1) li:nth-child(5) a").text("Contato");
    $(".menu__web ul:nth-child(1) li:nth-child(6) a").text("Área de Membros");

    //cabecalho web
    $(".menu ul:nth-child(1) li:nth-child(1) a").text("Início");
    $(".menu ul:nth-child(2) li:nth-child(2) a").text("Planos");
    $(".menu ul:nth-child(3) li:nth-child(3) a").text("Sobre Nós");
    $(".menu ul:nth-child(4) li:nth-child(4) a").text("Materiais");
    $(".menu ul:nth-child(5) li:nth-child(5) a").text("Contato");
    $(".menu ul:nth-child(6) li:nth-child(6) a").text("Área de Membros");

    $(".language-selected").removeClass("change-en");
    $(".language-selected").removeClass("change-es");
    $(".language-selected").addClass(".change-br");

    //titulo
    $(".banner1__titulo").text("Você pronto para o MUNDO");
    //p1
    $(".banner1__texto").text("Inglês de 2 a 5x na semana com professor particular ao vivo!")


    $(".banner2__titulo").text("O que você vai aprender em 18 meses?")
    $(".banner2__texto").text("Você vai falar inglês desde a PRIMEIRA aula e em 18 meses estará falando inglês de forma segura e confiante, com um vocabulário com mais de 60 verbos e 1.600 palavras");

    $(".banner2__btn-compra").text("Quero ser Aluno Speak");

    //banner3
    $(".banner3__titulo").text("Conheça o Método");
    $(".banne3__texto-card1").text("Mais de 60 verbos e 1.600 vocabulários.. Em aproximadamente 50 horas você conseguirá falar de maneira confiante e com autonomia fazendo e entendendo perguntas no presente, no passado e no futuro com esse conteúdo..");
    $(".banne3__texto-card2").text("Te apresentaremos o verbo To Be de maneira descomplicada e leve. Você aprenderá mais de 60 adjetivos para usar em frases afirmativas, negativas e interrogativas, usando o verbo To Be no presente, passado, e presente contínuo.");
    $(".banne3__texto-card3").text(" Agora você aprenderá em mais 40 horas a como  melhorar sua fluência com o uso dos verbos modais - can, could, should, would, may, might, must e muitas expressões idiomáticas.");
    $(".banne3__texto-card4").text("Agora chegou a hora de aperfeiçoar ainda mais o conversation com tópicos de discussão com uso de conectivos, e melhora de sua performance na fluência com uso de técnicas avançadas de debates e discussões em inglês.");

    //rodapé
    $(".container__rodape ul:nth-child(1) li:nth-child(1) a").text("Seja Aluno Speak");
    $(".container__rodape ul:nth-child(2) li:nth-child(2) a").text("Trabalhe Conosco");
    $(".container__rodape ul:nth-child(3) li:nth-child(3) a").text("Contato");
    $(".container__rodape ul:nth-child(4) li:nth-child(4) a").text("Planos de Aulas");

    //planos

    //card1
    $(".card1_texto_um").text("Aulas 4 a 5 vezes na semana");
    $(".card1_texto_dois").text("Faça aula em qualquer lugar");
    $(".card3__plan").text("Professor Particular");
    $(".card1_texto_tres").text("Plano de Aulas Personalizado");
    $(".card1_texto_quatro").text("Bônus - 2 Aulas de Gramática em Grupo");
    $(".card1_texto_cinco").text("Aulas individuais e Ao vivo");

    //card2
    $(".card2_texto_um").text("Aulas 4 a 5 vezes na semana");
    $(".card2_texto_dois").text("Faça aula em qualquer lugar");
    $(".card3__plan").text("Professor Particular");
    $(".card2_texto_tres").text("Plano de Aulas Personalizado");
    $(".card2_texto_cinco").text("Aulas individuais e Ao vivo");

    //card3
    $(".card3_texto_um").text("Aulas 3 a 4 vezes na semana");
    $(".card3_texto_dois").text("Faça aula em qualquer lugar");
    $(".card3__plan").text("Professor Particular");
    $(".card3_texto_tres").text("Plano de Aulas Personalizado");
    $(".card3_texto_cinco").text("Aulas individuais e Ao vivo");

    //card4
    $(".card4_texto_um").text("Aulas 2 a 4 vezes na semana");
    $(".card4_texto_dois").text("Faça aula em qualquer lugar");
    $(".card3__plan").text("Professor Particular");
    $(".card4_texto_tres").text("Plano de Aulas Personalizado");
    $(".card4_texto_cinco").text("Aulas individuais e Ao vivo");

    $(".button__plan button:nth-child(1) a").text("Escolher Plano");


    //bonus
    $(".bonus__titulo").text("O que você ganha estudando na Speak?");
    $(".bonus__texto1").text("Aulas de 30min/dia");
    $(".bonus__texto2").text("Material Gratuito PDF");
    $(".bonus__texto3").text("Aulas de 2 a 5x na semana");
    $(".bonus__texto4").text("Class Conversation");
    $(".bonus__texto5").text("Plano de Estudos Personalizado");
    $(".bonus__texto6").text("Masterclass em Grupo Ao Vivo");
    $(".bonus__texto7").text("Plataforma EAD");
    $(".bonus__texto8").text("Horários Flexíveis 07h às 23h");
    $(".bonus__texto9").text("Qualidade de Ensino Garantida");

    $(".caixa-button button:nth-child(1) a").text("Seja um Aluno Speak");

    //sobre
    $(".imagem__titulo").text("Sobre a Speak Online");
    $(".imagem__texto").text("Uma escola de Inglês com foco real na SUA fluência");
    $(".informacao__titulo").text("A ORIGEM DA SPEAK ONLINE");
    $(".informacao__texto1").text("A partir da iniciativa do professor Nagibe Rosti na década de 90 quando ele voltou dos Estados Unidos, após estudar lá e morar entre americanos ele foi estudando metodologias e vendo as estratégias utilizadas dentrodas escolas que ia lecionando.");
    $(".informacao__texto2").text("A estrada foi de professor, coordenador e diretor de escolas de idiomas. Após escrever uma série de livros chamada English To Go, com o inicio da pandemia, ele e seu sócio Wilson iniciaram as atividade de ensino EAD.");
    $(".informacao__texto3").text("A Speak Online Brasil desde o inicio vem levando centenas de milhares de alunos à fluência no inglês de maneira autônoma, fluida e confiante nesses anos todos.");

    $(".check__titulo").text("REFERÊNCIA DE ENSINO");

    $(".check__texto").text("Nossa missão é fazer a diferença na vida de nossos alunos, oferecendo um ensino de inglês focado na realidade particular de cada um. Por meio de ciência e estratégias mentais levamos cada aluno à fluência na oralidade da língua inglesa.");

    //Materiais
    $(".video__titulo").text("Assista uma aula do Book 1 com o criador do método Speak Online");

    $(".informacoes__titulo").text("Nossos alunos merecem ouro!");

    $(".informacoes__texto").text("Os alunos da Speak Online recebem diversos materiais de bônus ao se matricularem.");

    $(".cart__text").text("Aulas Bônus na Plataforma");
    $(".cart__text2").text("Aula de Gramatica");
    $(".cart__text3").text("Aula de Conversação Básica");
    $(".cart__text4").text("Aula de Conversação Avançada");
    $(".cart__text5").text("Livro 1 - PDF");
    $(".cart__text6").text("Livro 2 - PDF");
    $(".cart__text7").text("Livro 3 - PDF");
    $(".cart__text8").text("Cartões de Verbos - PDF");

    $(".cards-especiais__texto").text("Queremos que você também se sinta especial para nós, então deixamos alguns presentes para você nessa página.");

    $(".container__cards-especiais ul:nth-child(1) li:nth-child(1) a").text("Aula Experimental Gratuita");
    $(".container__cards-especiais ul:nth-child(2) li:nth-child(2) a").text("Lista de Verbos Irregulares");

    //Contato
    $(".note-e-texto__titulo").text("Ficou com alguma dúvida?");
    $(".note-e-texto__texto").text("Não tem problema. Nosso time tem as respostas!");
    $(".titulo-form").text("Preencha o formulário e nossos consultores entrarão em contato o quanto antes.");
    $(".texto-form").text("Se preferir, mande e-mail diretamente para suporte@speakonline.com.br")


  })
});






//INGLES



$(function () {
  $(".en").click(function () {
    $(".menu ul:nth-child(3) li:nth-child(1) a").text("Home");
    $(".menu ul:nth-child(3) li:nth-child(2) a").text("Plans");
    $(".menu ul:nth-child(3) li:nth-child(3) a").text("About Us");
    $(".menu ul:nth-child(3) li:nth-child(4) a").text("Materials");
    $(".menu ul:nth-child(3) li:nth-child(5) a").text("Contact");
    $(".menu ul:nth-child(3) li:nth-child(6) a").text("Members Area");

    //header web
    $(".menu__web ul:nth-child(1) li:nth-child(1) a").text("Home");
    $(".menu__web ul:nth-child(1) li:nth-child(2) a").text("Plans");
    $(".menu__web ul:nth-child(1) li:nth-child(3) a").text("About Us");
    $(".menu__web ul:nth-child(1) li:nth-child(4) a").text("Materials");
    $(".menu__web ul:nth-child(1) li:nth-child(5) a").text("Contact");
    $(".menu__web ul:nth-child(1) li:nth-child(6) a").text("Members Area");

    $(".language-selected").removeClass(".change-br");
    $(".language-selected").removeClass(".change-es");
    $(".language-selected").addClass("change-en");

    $(".banner1__titulo").text("You ready for the WORLD");
    $(".banner1__texto").text("English 2 to 5x a week with live private teacher!")

    $(".banner2__titulo").text("What will you learn in 6 months?")
    $(".banner2__texto").text("You will speak English from the FIRST class and in 6 months you will be speaking English safely and confidently, with a vocabulary with more than 60 verbs and 1.600 words");

    $(".banner2__btn-compra").text("I want to be a Student Speak");
    $(".banner3__titulo").text("Know the Method");
    $(".banne3__texto-card1").text("More than 60 verbs and 1,600 vocabularies.. In approximately 50 hours you will be able to speak confidently and autonomously, asking and understanding questions in the present, past and future with this content.");
    $(".banne3__texto-card2").text("We will present the verb To Be in an uncomplicated and light way. You will learn more than 60 adjectives to use in affirmative, negative, and interrogative sentences, using the verb To Be in the present, past, and present continuum.");
    $(".banne3__texto-card3").text("Now you will learn in another 40 hours how to improve your fluency with the use of modal verbs - can, could, should, would, may, Might, must and many idioms.");
    $(".banne3__texto-card4").text("Now is the time to further refine Conversation with discussion topics using connectives, and improve its performance in fluency using advanced discussion and discussion techniques in English.");




    $(".container__rodape ul:nth-child(1) li:nth-child(1) a").text("Be a Student Speak");
    $(".container__rodape ul:nth-child(1) li:nth-child(2) a").text("Work With Us");
    $(".container__rodape ul:nth-child(1) li:nth-child(3) a").text("Contact");
    $(".container__rodape ul:nth-child(1) li:nth-child(4) a").text("Lesson Plans");

    //planos 

    //card1
    $(".card1_texto_um").text("Classes 4 to 5 times a week");
    $(".card1_texto_dois").text("Take a class anywhere");
    $(".card3__plan").text("Personal Teacher");
    $(".card1_texto_tres").text("Personalized Lesson Plan");
    $(".card1_texto_quatro").text("Bonus - 2 Group Grammar Classes");
    $(".card1_texto_cinco").text("Individual Lessons and Live Lessons");

    //card2
    $(".card2_texto_um").text("Classes 4 to 5 times a week");
    $(".card2_texto_dois").text("Take a class anywhere");
    $(".card3__plan").text("Personal Teacher");
    $(".card2_texto_tres").text("Personalized Lesson Plan");
    $(".card2_texto_quatro").text("Individual Lessons and Live Lessons");


    //card3
    $(".card3_texto_um").text("Classes 3 to 4 times a week");
    $(".card3_texto_dois").text("Take a class anywhere");
    $(".card3__plan").text("Personal Teacher");
    $(".card3_texto_tres").text("Personalized Lesson Plan");
    $(".card3_texto_quatro").text("Individual Lessons and Live Lessons");

    //card3
    $(".card4_texto_um").text("Classes 2 to 3 times a week");
    $(".card4_texto_dois").text("Take a class anywhere");
    $(".card3__plan").text("Personal Teacher");
    $(".card4_texto_tres").text("Personalized Lesson Plan");
    $(".card4_texto_quatro").text("Individual Lessons and Live Lessons");

    $(".button__card button:nth-child(1) a").text("Choose Plan");

    //bonus
    $(".bonus__titulo").text("What do you get from studying at Speak?");
    $(".bonus__texto1").text("Classes of 30min/ day");
    $(".bonus__texto2").text("Free Material PDF");
    $(".bonus__texto3").text("Lessons from 2 to 5x a week");
    $(".bonus__texto4").text("Class Conversation");
    $(".bonus__texto5").text("Personalized Study Plan");
    $(".bonus__texto6").text("Masterclass in a Live Group");
    $(".bonus__texto7").text("Elearning Platform");
    $(".bonus__texto8").text("Flexible Hours 07a.m to 11p.m");
    $(".bonus__texto9").text("Quality of Teaching Guaranteed");

    $(".caixa-button button:nth-child(1) a").text("Be a Student Speak");

    //ABOUT

    $(".imagem__titulo").text("About Speak Online");
    $(".imagem__texto").text("An English school with a real focus on YOUR fluency");

    $(".informacao__titulo").text("THE ORIGIN OF SPEAK ONLINE");
    $(".informacao__texto1").text("From the initiative of Professor Nagibe Rosti in the 90s when he returned from the United States, after studying there and living among Americans he was studying methodologies and seeing the strategies used in schools he was teaching.");
    $(".informacao__texto2").text("The road was one of teacher, coordinator and director of language schools. After writing a series of books called English To Go, with the beginning of the pandemic, he and his partner Wilson started the EAD teaching activity");
    $(".informacao__texto3").text("Speak Online Brazil since the beginning has been leading hundreds of thousands of students to fluency in English in an autonomous, fluid and confident way in all these years.");

    $(".check__titulo").text("TEACHING REFERENCE");

    $(".check__texto").text("Our mission is to make a difference in the lives of our students by offering an English teaching focused on the particular reality of each one. Through science and mental strategies we lead each student to fluency in English language orality.");


    //Materiais
    $(".video__titulo").text("Watch a Book 1 lesson with the creator of the Speak Online method");

    $(".informacoes__titulo").text("Our students deserve gold!");

    $(".informacoes__texto").text("Speak Online students receive various bonus materials upon enrollment.");

    $(".cart__text").text("Bonus Classes on the Platform");
    $(".cart__text2").text("Gramar Class");
    $(".cart__text3").text("Basic Conversation Class");
    $(".cart__text4").text("Advanced Conversation Class");
    $(".cart__text5").text("Book 1 - PDF");
    $(".cart__text6").text("Book 2 - PDF");
    $(".cart__text7").text("Book 3 - PDF");
    $(".cart__text8").text("Cards of Verbs - PDF");

    $(".cards-especiais__texto").text("We want you to feel special to us too, so we leave some gifts for you on this page.");

    $(".container__cards-especiais ul:nth-child(2) li:nth-child(1) a").text("Free Trial Class");
    $(".container__cards-especiais ul:nth-child(2) li:nth-child(2) a").text("List of Irregular Verbs");


    //Contato
    $(".note-e-texto__titulo").text("Did you have any questions?");
    $(".note-e-texto__texto").text("No problem. Our team has the answers!");
    $(".titulo-form").text("Fill out the form and our consultants will contact you as soon as possible.");
    $(".texto-form").text("If you prefer, send email directly to support@speakonline.com.br")

    $(".input__wraper input > placeholder").text("sasnkaosioahsoiasa")
  })
});



$(function () {
  $(".es").click(function () {
    //cabeçalho
    $(".menu ul:nth-child(3) li:nth-child(1) a").text("Inicio");
    $(".menu ul:nth-child(3) li:nth-child(2) a").text("Planes");
    $(".menu ul:nth-child(3) li:nth-child(3) a").text("Sobre Nosotros");
    $(".menu ul:nth-child(3) li:nth-child(4) a").text("Materiales");
    $(".menu ul:nth-child(3) li:nth-child(5) a").text("Contacto");
    $(".menu ul:nth-child(3) li:nth-child(6) a").text("Área de Miembros");

    //cabecalho web
    $(".menu__web ul:nth-child(1) li:nth-child(1) a").text("Inicio");
    $(".menu__web ul:nth-child(1) li:nth-child(2) a").text("Planes");
    $(".menu__web ul:nth-child(1) li:nth-child(3) a").text("Sobre Nosotros");
    $(".menu__web ul:nth-child(1) li:nth-child(4) a").text("Materiales");
    $(".menu__web ul:nth-child(1) li:nth-child(5) a").text("Contacto");
    $(".menu__web ul:nth-child(1) li:nth-child(6) a").text("Área de Miembros");

    $(".language-selected").removeClass(".change-en");
    $(".language-selected").removeClass(".change-br");
    $(".language-selected").addClass("change-es");

    //titulo
    $(".banner1__titulo").text("Estás listo para el mundo");
    //p1
    $(".banner1__texto").text("¡Inglés de 2 a 5 veces por semana con profesor privado en vivo!")


    $(".banner2__titulo").text("¿Qué vas a aprender en 6 meses?")
    $(".banner2__texto").text("Hablarás inglés desde la primera clase y en 6 meses estarás hablando inglés de forma segura y segura, con un vocabulario con más de 60 verbos y 1.600 palabras");

    $(".banner2__btn-compra").text("Quiero ser Alumno Speak");

    //banner3
    $(".banner3__titulo").text("Conece el Método");
    $(".banne3__texto-card1").text("Más de 60 verbos y 1.600 vocabularios. En aproximadamente 50 horas podrás hablar con confianza y autonomía haciendo y entendiendo preguntas en el presente, el pasado y el futuro con este contenido.");
    $(".banne3__texto-card2").text("Te presentaremos el verbo To Be de manera sencilla y ligera. Usted aprenderá más de 60 adjetivos para usar en frases afirmativas, negativas e interrogativas, usando el verbo To Be en el presente, pasado, y presente continuo.");
    $(".banne3__texto-card3").text("Ahora usted aprenderá en más 40 horas a cómo mejorar su fluidez con el uso de los verbos modales - can, could, should, would, may, Might, must y muchas expresiones idiomáticas.");
    $(".banne3__texto-card4").text("Ahora es el momento de perfeccionar aún más Conversation con temas de discusión con uso de conectivos, y mejorar su desempeño en la fluidez con el uso de técnicas avanzadas de debates y discusiones en inglés.");

    //rodapé
    $(".container__rodape ul:nth-child(1) li:nth-child(1) a").text("Ser Nuestro Aluno");
    $(".container__rodape ul:nth-child(2) li:nth-child(2) a").text("Trabaje Con Nosotros");
    $(".container__rodape ul:nth-child(3) li:nth-child(3) a").text("Contacto");
    $(".container__rodape ul:nth-child(4) li:nth-child(4) a").text("Planes de Estudio");

    //planos

    //card1
    $(".card1_texto_um").text("Clases 4 a 5 veces por semana");
    $(".card1_texto_dois").text("Toma clases en cualquier lugar");
    $(".card3__plan").text("Profesor Particular");
    $(".card1_texto_tres").text("Plan de clases personalizado");
    $(".card1_texto_quatro").text("Bonus - 2 lecciones de gramática grupal");
    $(".card1_texto_cinco").text("Clases individuales y en vivo.");

    //card2
    $(".card2_texto_um").text("Clases 4 a 5 veces por semana");
    $(".card2_texto_dois").text("Toma clases en cualquier lugar");
    $(".card3__plan").text("Profesor Particular");
    $(".card2_texto_tres").text("Plan de clases personalizado");
    $(".card2_texto_cinco").text("Clases individuales y en vivo.");

    //card3
    $(".card3_texto_um").text("Clases 3 a 5 veces por semana");
    $(".card3_texto_dois").text("Toma clases en cualquier lugar");
    $(".card3__plan").text("Profesor Particular");
    $(".card3_texto_tres").text("Plan de clases personalizado");
    $(".card3_texto_cinco").text("Clases individuales y en vivo.");

    //card4
    $(".card4_texto_um").text("Aulas 2 a 4 vezes na semana");
    $(".card4_texto_dois").text("Faça aula em qualquer lugar");
    $(".card3__plan").text("Profesor Particular");
    $(".card4_texto_tres").text("Plan de clases personalizado");
    $(".card4_texto_cinco").text("Clases individuales y en vivo.");

    $(".button__plan button:nth-child(1) a").text("Seleccionar Planes");


    //bonus
    $(".bonus__titulo").text("¿Qué ganas estudiando en Speak?");
    $(".bonus__texto1").text("Clases de 30min/día");
    $(".bonus__texto2").text("Materiales Gratis.");
    $(".bonus__texto3").text("Clases de 2 a 5 veces por semana");
    $(".bonus__texto4").text("Clase de Conversación");
    $(".bonus__texto5").text("Plan de Estudios Personalizado");
    $(".bonus__texto6").text("Masterclass en Grupo En Vivo");
    $(".bonus__texto7").text("Plataforma E-learning");
    $(".bonus__texto8").text("Horarios flexibles 07h a 23h");
    $(".bonus__texto9").text("Calidad de Enseñanza Garantizada");

    $(".caixa-button button:nth-child(1) a").text("Sé un estudiante Speak");

    //sobre
    $(".imagem__titulo").text("Acerca de Speak Online");
    $(".imagem__texto").text("Una escuela de inglés con un enfoque real en su fluidez");
    $(".informacao__titulo").text("EL ORIGEN DE SPEAK ONLINE");
    $(".informacao__texto1").text("A partir de la iniciativa del profesor Nagibe Rosti en la década de los 90 cuando volvió de Estados Unidos, después de estudiar allí y vivir entre estadounidenses él fue estudiando metodologías y viendo las estrategias utilizadas en las escuelas que iba enseñando");
    $(".informacao__texto2").text("La carretera fue de profesor, coordinador y director de escuelas de idiomas. Después de escribir una serie de libros llamada English To Go, con el inicio de la pandemia, él y su socio Wilson iniciaron las actividades de enseñanza EAD.");
    $(".informacao__texto3").text("A Speak Online Brasil desde o inicio vem levando centenas de milhares de alunos à fluência no inglês de maneira autônoma, fluida e confiante nesses anos todos.");

    $(".check__titulo").text("REFERÊNCIA DE EDUCACIÓN");

    $(".check__texto").text("Nuestra misión es marcar la diferencia en la vida de nuestros estudiantes, ofreciendo una enseñanza de inglés centrada en la realidad particular de cada uno. Por medio de ciencia y estrategias mentales llevamos a cada alumno a la fluidez en la oralidad de la lengua inglesa.");

    //Materiais
    $(".video__titulo").text("Vea una clase de Book 1 con el creador del método Speak Online");

    $(".informacoes__titulo").text("¡Nuestros estudiantes merecen oro!");

    $(".informacoes__texto").text("Los alumnos de Speak Online reciben diversos materiales de bonificación al inscribirse.");

    $(".cart__text").text("Clases Bono en la Plataforma");
    $(".cart__text2").text("lección de gramática.");
    $(".cart__text3").text("Clase de Conversación Básica");
    $(".cart__text4").text("Clase de Conversación Avanzada");
    $(".cart__text5").text("Libro 1 - PDF");
    $(".cart__text6").text("Libro 2 - PDF");
    $(".cart__text7").text("Libro 3 - PDF");
    $(".cart__text8").text("Tarjetas de Verbos - PDF");

    $(".cards-especiais__texto").text("Queremos que te sientas especial para nosotros, así que te dejamos algunos regalos en esta página.");

    $(".container__cards-especiais ul:nth-child(2) li:nth-child(1) a").text("Clase de Prueba Gratuita");
    $(".container__cards-especiais ul:nth-child(2) li:nth-child(2) a").text("Lista de Verbos Irregulares");

    //Contato
    $(".note-e-texto__titulo").text("¿Se quedó con alguna duda?");
    $(".note-e-texto__texto").text("No hay problema. ¡Nuestro equipo tiene las respuestas!");
    $(".titulo-form").text("Rellene el formulario y nuestros consultores se pondrán en contacto lo antes posible.");
    $(".texto-form").text("Si lo prefiere, envíe un correo electrónico directamente a soporte@speakonline.com.br")


  })
});


//language2
$(function () {
  $(".br").click(function () {
    //cabeçalho
    $(".menu__web ul:nth-child(1) li:nth-child(1) a").text("Início");
    $(".menu__web ul:nth-child(1) li:nth-child(2) a").text("Planos");
    $(".menu__web ul:nth-child(1) li:nth-child(3) a").text("Sobre Nós");
    $(".menu__web ul:nth-child(1) li:nth-child(4) a").text("Materiais");
    $(".menu__web ul:nth-child(1) li:nth-child(5) a").text("Contato");
    $(".menu__web ul:nth-child(1) li:nth-child(6) a").text("Área de Membros");

    //cabecalho web
    $(".menu ul:nth-child(1) li:nth-child(1) a").text("Início");
    $(".menu ul:nth-child(2) li:nth-child(2) a").text("Planos");
    $(".menu ul:nth-child(3) li:nth-child(3) a").text("Sobre Nós");
    $(".menu ul:nth-child(4) li:nth-child(4) a").text("Materiais");
    $(".menu ul:nth-child(5) li:nth-child(5) a").text("Contato");
    $(".menu ul:nth-child(6) li:nth-child(6) a").text("Área de Membros");

    $(".language2-selected").removeClass("change-en");
    $(".language2-selected").removeClass("change-es");
    $(".language2-selected").addClass(".change-br");

    //titulo
    $(".banner1__titulo").text("Você pronto para o MUNDO");
    //p1
    $(".banner1__texto").text("Inglês de 2 a 5x na semana com professor particular ao vivo!")


    $(".banner2__titulo").text("O que você vai aprender em 18 meses?")
    $(".banner2__texto").text("Você vai falar inglês desde a PRIMEIRA aula e em 18 meses estará falando inglês de forma segura e confiante, com um vocabulário com mais de 60 verbos e 1.600 palavras");

    $(".banner2__btn-compra").text("Quero ser Aluno Speak");

    //banner3
    $(".banner3__titulo").text("Conheça o Método");
    $(".banne3__texto-card1").text("Mais de 60 verbos e 1.600 vocabulários.. Em aproximadamente 50 horas você conseguirá falar de maneira confiante e com autonomia fazendo e entendendo perguntas no presente, no passado e no futuro com esse conteúdo..");
    $(".banne3__texto-card2").text("Te apresentaremos o verbo To Be de maneira descomplicada e leve. Você aprenderá mais de 60 adjetivos para usar em frases afirmativas, negativas e interrogativas, usando o verbo To Be no presente, passado, e presente contínuo.");
    $(".banne3__texto-card3").text(" Agora você aprenderá em mais 40 horas a como  melhorar sua fluência com o uso dos verbos modais - can, could, should, would, may, might, must e muitas expressões idiomáticas.");
    $(".banne3__texto-card4").text("Agora chegou a hora de aperfeiçoar ainda mais o conversation com tópicos de discussão com uso de conectivos, e melhora de sua performance na fluência com uso de técnicas avançadas de debates e discussões em inglês.");

    //rodapé
    $(".container__rodape ul:nth-child(1) li:nth-child(1) a").text("Seja Aluno Speak");
    $(".container__rodape ul:nth-child(2) li:nth-child(2) a").text("Trabalhe Conosco");
    $(".container__rodape ul:nth-child(3) li:nth-child(3) a").text("Contato");
    $(".container__rodape ul:nth-child(4) li:nth-child(4) a").text("Planos de Aulas");

    //planos

    //card1
    $(".card1_texto_um").text("Aulas 4 a 5 vezes na semana");
    $(".card1_texto_dois").text("Faça aula em qualquer lugar");
    $(".card3__plan").text("Professor Particular");
    $(".card1_texto_tres").text("Plano de Aulas Personalizado");
    $(".card1_texto_quatro").text("Bônus - 2 Aulas de Gramática em Grupo");
    $(".card1_texto_cinco").text("Aulas individuais e Ao vivo");

    //card2
    $(".card2_texto_um").text("Aulas 4 a 5 vezes na semana");
    $(".card2_texto_dois").text("Faça aula em qualquer lugar");
    $(".card3__plan").text("Professor Particular");
    $(".card2_texto_tres").text("Plano de Aulas Personalizado");
    $(".card2_texto_cinco").text("Aulas individuais e Ao vivo");

    //card3
    $(".card3_texto_um").text("Aulas 3 a 4 vezes na semana");
    $(".card3_texto_dois").text("Faça aula em qualquer lugar");
    $(".card3__plan").text("Professor Particular");
    $(".card3_texto_tres").text("Plano de Aulas Personalizado");
    $(".card3_texto_cinco").text("Aulas individuais e Ao vivo");

    //card4
    $(".card4_texto_um").text("Aulas 2 a 4 vezes na semana");
    $(".card4_texto_dois").text("Faça aula em qualquer lugar");
    $(".card3__plan").text("Professor Particular");
    $(".card4_texto_tres").text("Plano de Aulas Personalizado");
    $(".card4_texto_cinco").text("Aulas individuais e Ao vivo");

    $(".button__plan button:nth-child(1) a").text("Escolher Plano");


    //bonus
    $(".bonus__titulo").text("O que você ganha estudando na Speak?");
    $(".bonus__texto1").text("Aulas de 30min/dia");
    $(".bonus__texto2").text("Material Gratuito PDF");
    $(".bonus__texto3").text("Aulas de 2 a 5x na semana");
    $(".bonus__texto4").text("Class Conversation");
    $(".bonus__texto5").text("Plano de Estudos Personalizado");
    $(".bonus__texto6").text("Masterclass em Grupo Ao Vivo");
    $(".bonus__texto7").text("Plataforma EAD");
    $(".bonus__texto8").text("Horários Flexíveis 07h às 23h");
    $(".bonus__texto9").text("Qualidade de Ensino Garantida");

    $(".caixa-button button:nth-child(1) a").text("Seja um Aluno Speak");

    //sobre
    $(".imagem__titulo").text("Sobre a Speak Online");
    $(".imagem__texto").text("Uma escola de Inglês com foco real na SUA fluência");
    $(".informacao__titulo").text("A ORIGEM DA SPEAK ONLINE");
    $(".informacao__texto1").text("A partir da iniciativa do professor Nagibe Rosti na década de 90 quando ele voltou dos Estados Unidos, após estudar lá e morar entre americanos ele foi estudando metodologias e vendo as estratégias utilizadas dentrodas escolas que ia lecionando.");
    $(".informacao__texto2").text("A estrada foi de professor, coordenador e diretor de escolas de idiomas. Após escrever uma série de livros chamada English To Go, com o inicio da pandemia, ele e seu sócio Wilson iniciaram as atividade de ensino EAD.");
    $(".informacao__texto3").text("A Speak Online Brasil desde o inicio vem levando centenas de milhares de alunos à fluência no inglês de maneira autônoma, fluida e confiante nesses anos todos.");

    $(".check__titulo").text("REFERÊNCIA DE ENSINO");

    $(".check__texto").text("Nossa missão é fazer a diferença na vida de nossos alunos, oferecendo um ensino de inglês focado na realidade particular de cada um. Por meio de ciência e estratégias mentais levamos cada aluno à fluência na oralidade da língua inglesa.");

    //Materiais
    $(".video__titulo").text("Assista uma aula do Book 1 com o criador do método Speak Online");

    $(".informacoes__titulo").text("Nossos alunos merecem ouro!");

    $(".informacoes__texto").text("Os alunos da Speak Online recebem diversos materiais de bônus ao se matricularem.");

    $(".cart__text").text("Aulas Bônus na Plataforma");
    $(".cart__text2").text("Aula de Gramatica");
    $(".cart__text3").text("Aula de Conversação Básica");
    $(".cart__text4").text("Aula de Conversação Avançada");
    $(".cart__text5").text("Livro 1 - PDF");
    $(".cart__text6").text("Livro 2 - PDF");
    $(".cart__text7").text("Livro 3 - PDF");
    $(".cart__text8").text("Cartões de Verbos - PDF");

    $(".cards-especiais__texto").text("Queremos que você também se sinta especial para nós, então deixamos alguns presentes para você nessa página.");

    $(".container__cards-especiais ul:nth-child(1) li:nth-child(1) a").text("Aula Experimental Gratuita");
    $(".container__cards-especiais ul:nth-child(2) li:nth-child(2) a").text("Lista de Verbos Irregulares");

    //Contato
    $(".note-e-texto__titulo").text("Ficou com alguma dúvida?");
    $(".note-e-texto__texto").text("Não tem problema. Nosso time tem as respostas!");
    $(".titulo-form").text("Preencha o formulário e nossos consultores entrarão em contato o quanto antes.");
    $(".texto-form").text("Se preferir, mande e-mail diretamente para suporte@speakonline.com.br")


  })
});






//INGLES



$(function () {
  $(".en").click(function () {
    $(".menu ul:nth-child(3) li:nth-child(1) a").text("Home");
    $(".menu ul:nth-child(3) li:nth-child(2) a").text("Plans");
    $(".menu ul:nth-child(3) li:nth-child(3) a").text("About Us");
    $(".menu ul:nth-child(3) li:nth-child(4) a").text("Materials");
    $(".menu ul:nth-child(3) li:nth-child(5) a").text("Contact");
    $(".menu ul:nth-child(3) li:nth-child(6) a").text("Members Area");

    //header web
    $(".menu__web ul:nth-child(1) li:nth-child(1) a").text("Home");
    $(".menu__web ul:nth-child(1) li:nth-child(2) a").text("Plans");
    $(".menu__web ul:nth-child(1) li:nth-child(3) a").text("About Us");
    $(".menu__web ul:nth-child(1) li:nth-child(4) a").text("Materials");
    $(".menu__web ul:nth-child(1) li:nth-child(5) a").text("Contact");
    $(".menu__web ul:nth-child(1) li:nth-child(6) a").text("Members Area");

    $(".language2-selected").removeClass(".change-br");
    $(".language2-selected").removeClass(".change-es");
    $(".language2-selected").addClass("change-en");

    $(".banner1__titulo").text("You ready for the WORLD");
    $(".banner1__texto").text("English 2 to 5x a week with live private teacher!")

    $(".banner2__titulo").text("What will you learn in 6 months?")
    $(".banner2__texto").text("You will speak English from the FIRST class and in 6 months you will be speaking English safely and confidently, with a vocabulary with more than 60 verbs and 1.600 words");

    $(".banner2__btn-compra").text("I want to be a Student Speak");
    $(".banner3__titulo").text("Know the Method");
    $(".banne3__texto-card1").text("More than 60 verbs and 1,600 vocabularies.. In approximately 50 hours you will be able to speak confidently and autonomously, asking and understanding questions in the present, past and future with this content.");
    $(".banne3__texto-card2").text("We will present the verb To Be in an uncomplicated and light way. You will learn more than 60 adjectives to use in affirmative, negative, and interrogative sentences, using the verb To Be in the present, past, and present continuum.");
    $(".banne3__texto-card3").text("Now you will learn in another 40 hours how to improve your fluency with the use of modal verbs - can, could, should, would, may, Might, must and many idioms.");
    $(".banne3__texto-card4").text("Now is the time to further refine Conversation with discussion topics using connectives, and improve its performance in fluency using advanced discussion and discussion techniques in English.");




    $(".container__rodape ul:nth-child(1) li:nth-child(1) a").text("Be a Student Speak");
    $(".container__rodape ul:nth-child(1) li:nth-child(2) a").text("Work With Us");
    $(".container__rodape ul:nth-child(1) li:nth-child(3) a").text("Contact");
    $(".container__rodape ul:nth-child(1) li:nth-child(4) a").text("Lesson Plans");

    //planos 

    //card1
    $(".card1_texto_um").text("Classes 4 to 5 times a week");
    $(".card1_texto_dois").text("Take a class anywhere");
    $(".card3__plan").text("Personal Teacher");
    $(".card1_texto_tres").text("Personalized Lesson Plan");
    $(".card1_texto_quatro").text("Bonus - 2 Group Grammar Classes");
    $(".card1_texto_cinco").text("Individual Lessons and Live Lessons");

    //card2
    $(".card2_texto_um").text("Classes 4 to 5 times a week");
    $(".card2_texto_dois").text("Take a class anywhere");
    $(".card3__plan").text("Personal Teacher");
    $(".card2_texto_tres").text("Personalized Lesson Plan");
    $(".card2_texto_quatro").text("Individual Lessons and Live Lessons");


    //card3
    $(".card3_texto_um").text("Classes 3 to 4 times a week");
    $(".card3_texto_dois").text("Take a class anywhere");
    $(".card3__plan").text("Personal Teacher");
    $(".card3_texto_tres").text("Personalized Lesson Plan");
    $(".card3_texto_quatro").text("Individual Lessons and Live Lessons");

    //card3
    $(".card4_texto_um").text("Classes 2 to 3 times a week");
    $(".card4_texto_dois").text("Take a class anywhere");
    $(".card3__plan").text("Personal Teacher");
    $(".card4_texto_tres").text("Personalized Lesson Plan");
    $(".card4_texto_quatro").text("Individual Lessons and Live Lessons");

    $(".button__card button:nth-child(1) a").text("Choose Plan");

    //bonus
    $(".bonus__titulo").text("What do you get from studying at Speak?");
    $(".bonus__texto1").text("Classes of 30min/ day");
    $(".bonus__texto2").text("Free Material PDF");
    $(".bonus__texto3").text("Lessons from 2 to 5x a week");
    $(".bonus__texto4").text("Class Conversation");
    $(".bonus__texto5").text("Personalized Study Plan");
    $(".bonus__texto6").text("Masterclass in a Live Group");
    $(".bonus__texto7").text("Elearning Platform");
    $(".bonus__texto8").text("Flexible Hours 07a.m to 11p.m");
    $(".bonus__texto9").text("Quality of Teaching Guaranteed");

    $(".caixa-button button:nth-child(1) a").text("Be a Student Speak");

    //ABOUT

    $(".imagem__titulo").text("About Speak Online");
    $(".imagem__texto").text("An English school with a real focus on YOUR fluency");

    $(".informacao__titulo").text("THE ORIGIN OF SPEAK ONLINE");
    $(".informacao__texto1").text("From the initiative of Professor Nagibe Rosti in the 90s when he returned from the United States, after studying there and living among Americans he was studying methodologies and seeing the strategies used in schools he was teaching.");
    $(".informacao__texto2").text("The road was one of teacher, coordinator and director of language schools. After writing a series of books called English To Go, with the beginning of the pandemic, he and his partner Wilson started the EAD teaching activity");
    $(".informacao__texto3").text("Speak Online Brazil since the beginning has been leading hundreds of thousands of students to fluency in English in an autonomous, fluid and confident way in all these years.");

    $(".check__titulo").text("TEACHING REFERENCE");

    $(".check__texto").text("Our mission is to make a difference in the lives of our students by offering an English teaching focused on the particular reality of each one. Through science and mental strategies we lead each student to fluency in English language orality.");


    //Materiais
    $(".video__titulo").text("Watch a Book 1 lesson with the creator of the Speak Online method");

    $(".informacoes__titulo").text("Our students deserve gold!");

    $(".informacoes__texto").text("Speak Online students receive various bonus materials upon enrollment.");

    $(".cart__text").text("Bonus Classes on the Platform");
    $(".cart__text2").text("Gramar Class");
    $(".cart__text3").text("Basic Conversation Class");
    $(".cart__text4").text("Advanced Conversation Class");
    $(".cart__text5").text("Book 1 - PDF");
    $(".cart__text6").text("Book 2 - PDF");
    $(".cart__text7").text("Book 3 - PDF");
    $(".cart__text8").text("Cards of Verbs - PDF");

    $(".cards-especiais__texto").text("We want you to feel special to us too, so we leave some gifts for you on this page.");

    $(".container__cards-especiais ul:nth-child(2) li:nth-child(1) a").text("Free Trial Class");
    $(".container__cards-especiais ul:nth-child(2) li:nth-child(2) a").text("List of Irregular Verbs");


    //Contato
    $(".note-e-texto__titulo").text("Did you have any questions?");
    $(".note-e-texto__texto").text("No problem. Our team has the answers!");
    $(".titulo-form").text("Fill out the form and our consultants will contact you as soon as possible.");
    $(".texto-form").text("If you prefer, send email directly to support@speakonline.com.br")

    $(".input__wraper input > placeholder").text("sasnkaosioahsoiasa")
  })
});



$(function () {
  $(".es").click(function () {
    //cabeçalho
    $(".menu ul:nth-child(3) li:nth-child(1) a").text("Inicio");
    $(".menu ul:nth-child(3) li:nth-child(2) a").text("Planes");
    $(".menu ul:nth-child(3) li:nth-child(3) a").text("Sobre Nosotros");
    $(".menu ul:nth-child(3) li:nth-child(4) a").text("Materiales");
    $(".menu ul:nth-child(3) li:nth-child(5) a").text("Contacto");
    $(".menu ul:nth-child(3) li:nth-child(6) a").text("Área de Miembros");

    //cabecalho web
    $(".menu__web ul:nth-child(1) li:nth-child(1) a").text("Inicio");
    $(".menu__web ul:nth-child(1) li:nth-child(2) a").text("Planes");
    $(".menu__web ul:nth-child(1) li:nth-child(3) a").text("Sobre Nosotros");
    $(".menu__web ul:nth-child(1) li:nth-child(4) a").text("Materiales");
    $(".menu__web ul:nth-child(1) li:nth-child(5) a").text("Contacto");
    $(".menu__web ul:nth-child(1) li:nth-child(6) a").text("Área de Miembros");

    $(".language2-selected").removeClass(".change-en");
    $(".language2-selected").removeClass(".change-br");
    $(".language2-selected").addClass("change-es");

    //titulo
    $(".banner1__titulo").text("Estás listo para el mundo");
    //p1
    $(".banner1__texto").text("¡Inglés de 2 a 5 veces por semana con profesor privado en vivo!")


    $(".banner2__titulo").text("¿Qué vas a aprender en 6 meses?")
    $(".banner2__texto").text("Hablarás inglés desde la primera clase y en 6 meses estarás hablando inglés de forma segura y segura, con un vocabulario con más de 60 verbos y 1.600 palabras");

    $(".banner2__btn-compra").text("Quiero ser Alumno Speak");

    //banner3
    $(".banner3__titulo").text("Conece el Método");
    $(".banne3__texto-card1").text("Más de 60 verbos y 1.600 vocabularios. En aproximadamente 50 horas podrás hablar con confianza y autonomía haciendo y entendiendo preguntas en el presente, el pasado y el futuro con este contenido.");
    $(".banne3__texto-card2").text("Te presentaremos el verbo To Be de manera sencilla y ligera. Usted aprenderá más de 60 adjetivos para usar en frases afirmativas, negativas e interrogativas, usando el verbo To Be en el presente, pasado, y presente continuo.");
    $(".banne3__texto-card3").text("Ahora usted aprenderá en más 40 horas a cómo mejorar su fluidez con el uso de los verbos modales - can, could, should, would, may, Might, must y muchas expresiones idiomáticas.");
    $(".banne3__texto-card4").text("Ahora es el momento de perfeccionar aún más Conversation con temas de discusión con uso de conectivos, y mejorar su desempeño en la fluidez con el uso de técnicas avanzadas de debates y discusiones en inglés.");

    //rodapé
    $(".container__rodape ul:nth-child(1) li:nth-child(1) a").text("Ser Nuestro Aluno");
    $(".container__rodape ul:nth-child(2) li:nth-child(2) a").text("Trabaje Con Nosotros");
    $(".container__rodape ul:nth-child(3) li:nth-child(3) a").text("Contacto");
    $(".container__rodape ul:nth-child(4) li:nth-child(4) a").text("Planes de Estudio");

    //planos

    //card1
    $(".card1_texto_um").text("Clases 4 a 5 veces por semana");
    $(".card1_texto_dois").text("Toma clases en cualquier lugar");
    $(".card3__plan").text("Profesor Particular");
    $(".card1_texto_tres").text("Plan de clases personalizado");
    $(".card1_texto_quatro").text("Bonus - 2 lecciones de gramática grupal");
    $(".card1_texto_cinco").text("Clases individuales y en vivo.");

    //card2
    $(".card2_texto_um").text("Clases 4 a 5 veces por semana");
    $(".card2_texto_dois").text("Toma clases en cualquier lugar");
    $(".card3__plan").text("Profesor Particular");
    $(".card2_texto_tres").text("Plan de clases personalizado");
    $(".card2_texto_cinco").text("Clases individuales y en vivo.");

    //card3
    $(".card3_texto_um").text("Clases 3 a 5 veces por semana");
    $(".card3_texto_dois").text("Toma clases en cualquier lugar");
    $(".card3__plan").text("Profesor Particular");
    $(".card3_texto_tres").text("Plan de clases personalizado");
    $(".card3_texto_cinco").text("Clases individuales y en vivo.");

    //card4
    $(".card4_texto_um").text("Aulas 2 a 4 vezes na semana");
    $(".card4_texto_dois").text("Faça aula em qualquer lugar");
    $(".card3__plan").text("Profesor Particular");
    $(".card4_texto_tres").text("Plan de clases personalizado");
    $(".card4_texto_cinco").text("Clases individuales y en vivo.");

    $(".button__plan button:nth-child(1) a").text("Seleccionar Planes");


    //bonus
    $(".bonus__titulo").text("¿Qué ganas estudiando en Speak?");
    $(".bonus__texto1").text("Clases de 30min/día");
    $(".bonus__texto2").text("Materiales Gratis.");
    $(".bonus__texto3").text("Clases de 2 a 5 veces por semana");
    $(".bonus__texto4").text("Clase de Conversación");
    $(".bonus__texto5").text("Plan de Estudios Personalizado");
    $(".bonus__texto6").text("Masterclass en Grupo En Vivo");
    $(".bonus__texto7").text("Plataforma E-learning");
    $(".bonus__texto8").text("Horarios flexibles 07h a 23h");
    $(".bonus__texto9").text("Calidad de Enseñanza Garantizada");

    $(".caixa-button button:nth-child(1) a").text("Sé un estudiante Speak");

    //sobre
    $(".imagem__titulo").text("Acerca de Speak Online");
    $(".imagem__texto").text("Una escuela de inglés con un enfoque real en su fluidez");
    $(".informacao__titulo").text("EL ORIGEN DE SPEAK ONLINE");
    $(".informacao__texto1").text("A partir de la iniciativa del profesor Nagibe Rosti en la década de los 90 cuando volvió de Estados Unidos, después de estudiar allí y vivir entre estadounidenses él fue estudiando metodologías y viendo las estrategias utilizadas en las escuelas que iba enseñando");
    $(".informacao__texto2").text("La carretera fue de profesor, coordinador y director de escuelas de idiomas. Después de escribir una serie de libros llamada English To Go, con el inicio de la pandemia, él y su socio Wilson iniciaron las actividades de enseñanza EAD.");
    $(".informacao__texto3").text("A Speak Online Brasil desde o inicio vem levando centenas de milhares de alunos à fluência no inglês de maneira autônoma, fluida e confiante nesses anos todos.");

    $(".check__titulo").text("REFERÊNCIA DE EDUCACIÓN");

    $(".check__texto").text("Nuestra misión es marcar la diferencia en la vida de nuestros estudiantes, ofreciendo una enseñanza de inglés centrada en la realidad particular de cada uno. Por medio de ciencia y estrategias mentales llevamos a cada alumno a la fluidez en la oralidad de la lengua inglesa.");

    //Materiais
    $(".video__titulo").text("Vea una clase de Book 1 con el creador del método Speak Online");

    $(".informacoes__titulo").text("¡Nuestros estudiantes merecen oro!");

    $(".informacoes__texto").text("Los alumnos de Speak Online reciben diversos materiales de bonificación al inscribirse.");

    $(".cart__text").text("Clases Bono en la Plataforma");
    $(".cart__text2").text("lección de gramática.");
    $(".cart__text3").text("Clase de Conversación Básica");
    $(".cart__text4").text("Clase de Conversación Avanzada");
    $(".cart__text5").text("Libro 1 - PDF");
    $(".cart__text6").text("Libro 2 - PDF");
    $(".cart__text7").text("Libro 3 - PDF");
    $(".cart__text8").text("Tarjetas de Verbos - PDF");

    $(".cards-especiais__texto").text("Queremos que te sientas especial para nosotros, así que te dejamos algunos regalos en esta página.");

    $(".container__cards-especiais ul:nth-child(2) li:nth-child(1) a").text("Clase de Prueba Gratuita");
    $(".container__cards-especiais ul:nth-child(2) li:nth-child(2) a").text("Lista de Verbos Irregulares");

    //Contato
    $(".note-e-texto__titulo").text("¿Se quedó con alguna duda?");
    $(".note-e-texto__texto").text("No hay problema. ¡Nuestro equipo tiene las respuestas!");
    $(".titulo-form").text("Rellene el formulario y nuestros consultores se pondrán en contacto lo antes posible.");
    $(".texto-form").text("Si lo prefiere, envíe un correo electrónico directamente a soporte@speakonline.com.br")


  })
});
