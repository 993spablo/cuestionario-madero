// CONFIGURACIÓN DE SUPABASE
const SUPABASE_URL = "https://odhjqjtxtiloxbdhejvs.supabase.co"; // Tu URL
const SUPABASE_KEY = "sb_publishable_nqozJI5XHInP0TJNg5ywsg_3OV5RIwk"; // Tu Publishable Key
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// CLAVE ADMINISTRADOR
const ADMIN_PASSWORD = "madero123admin";

// ENLACES DE CAPACITACIÓN POR PERFIL
const enlacesCursos = {
  "Ejecución Directa": "https://tu-plataforma.com/curso-ejecucion",
  "Simulación y Escenario": "https://tu-plataforma.com/curso-simulacion",
  "Analítico de Precisión": "https://tu-plataforma.com/curso-analitico",
  "Reactivo de Alta Presión": "https://tu-plataforma.com/curso-reactivo",
  "Estructural y Sistemático": "https://tu-plataforma.com/curso-estructural",
  "Autónomo Creativo": "https://tu-plataforma.com/curso-autonomo"
};

// GUÍA DE ENSEÑANZA PARA ADMINISTRADOR
const guiaEnsenanza = {
  "Ejecución Directa": "Aprender haciendo: Reducir teoría al mínimo. Usar demostraciones presenciales y feedback físico directo.",
  "Simulación y Escenario": "Role-Playing: Practicar en escenarios cambiantes, debates de equipo y dinámicas interpersonales.",
  "Analítico de Precisión": "Manuales y datos: Entregar fichas técnicas y gráficos previo a la práctica. Explicar el fundamento lógico.",
  "Reactivo de Alta Presión": "Microlearning: Instrucciones flash en 30-60 segundos. Desafíos bajo tiempo y comandos directos.",
  "Estructural y Sistemático": "Enfoque Top-Down: Presentar el flujograma/esquema completo antes de ver detalles. Usar checklists.",
  "Autónomo Creativo": "Aprendizaje basado en retos: Dar libertad total para investigar y resolver a su propio ritmo sin microgestión."
};

const preguntas = [
  { n: 1, text: "Cuando te enfrentas a un aparato o software totalmente nuevo, ¿qué haces primero?", opts: { A: "Empiezas a tocar botones o usarlo de inmediato.", B: "Buscas a alguien que te explique o conversas sobre ello.", C: "Lees el manual detalladamente o buscas especificaciones.", D: "Buscas una guía rápida de 3 pasos.", E: "Analizas el diagrama de flujo o estructura lógica.", F: "Exploras por tu cuenta probando caminos no convencionales." } },
  { n: 2, text: "Si debes resolver un problema complejo en equipo, tu contribución principal es:", opts: { A: "Pasar a la acción inmediata sobre el terreno.", B: "Facilitar el debate y moderar la comunicación.", C: "Analizar los datos antecedentes con rigor lógico.", D: "Dar órdenes claras para solucionar la urgencia ya.", E: "Diseñar el plan metodológico y el cronograma.", F: "Proponer una alternativa totalmente disruptiva." } },
  { n: 3, text: "¿Cómo prefieres recibir capacitación o adquirir una nueva habilidad?", opts: { A: "Ejercicios prácticos manipulando elementos reales.", B: "Dinámicas de grupo, juegos de roles y debates.", C: "Estudiando gráficos, cuadros y manuales legibles.", D: "Instrucciones breves y directas enfocado en imprevistos.", E: "Esquemas jerárquicos y mapa de todo el sistema.", F: "Estudio autodidacta y exploración a tu ritmo." } },
  { n: 4, text: "Cuando estás bajo una situación de límite de tiempo o alta exigencia, tú:", opts: { A: "Confías en tu memoria muscular e instinto práctico.", B: "Adaptas tu discurso a las personas requeridas.", C: "Verificas dos veces los datos para evitar errores.", D: "Tomas decisiones drásticas e inmediatas.", E: "Creas una lista de comprobación de emergencia.", F: "Te aíslas un momento para hallar una idea propia." } },
  { n: 5, text: "¿Qué tipo de información retienes con mayor facilidad?", opts: { A: "La que experimentaste físicamente con tus manos.", B: "Historias, conversaciones y debates en los que participaste.", C: "Cifras exactas, argumentos lógicos y lecturas.", D: "Indicaciones cortas y de utilidad inmediata.", E: "Modelos conceptuales y relaciones causa-efecto.", F: "Ideas abstractas o hallazgos por investigación propia." } },
  { n: 6, text: "Cuando alguien te da explicaciones teóricas muy extensas, tu reacción suele ser:", opts: { A: "Impacientarte; necesitas moverte o probarlo.", B: "Interrumpir para hacer preguntas o dramatizar.", C: "Tomar notas minuciosas para verificar la lógica.", D: "Pedir que vayan al punto principal exactamente.", E: "Encajar la teoría en un marco conceptual amplio.", F: "Desconectarte mentalmente para imaginar alternativas." } },
  { n: 7, text: "¿Cuál es tu herramienta favorita para organizar tus tareas pendientes?", opts: { A: "Iniciar de inmediato con lo primero en frente.", B: "Comentar tareas con otros para priorizar compromisos.", C: "Una hoja de cálculo detallada con parámetros exactos.", D: "Una lista muy corta con lo urgente del día.", E: "Una matriz con categorías y listas de comprobación.", F: "Un cuaderno libre combinando esquemas y bocetos." } },
  { n: 8, text: "Si tienes que enseñar a otra persona a realizar una tarea, tú:", opts: { A: "Le pides que tome las herramientas y lo haga guiándola.", B: "Haces una simulación y dialogas sobre escenarios.", C: "Le entregas un documento de procedimientos y fundamentos.", D: "Le muestras en 30 segundos y pides que lo repita.", E: "Le explicas cómo funciona todo el sistema primero.", F: "Le das las pautas y permites que halle su estilo." } },
  { n: 9, text: "¿Qué ambiente te resulta más cómodo para trabajar o estudiar?", opts: { A: "Entorno dinámico con libertad de movimiento físico.", B: "Espacio social con constante intercambio comunicativo.", C: "Lugar silencioso para analizar datos sin distracción.", D: "Ambiente acelerado con metas inmediatas que resolver.", E: "Entorno estructurado y con procesos definidos.", F: "Espacio autónomo sin interferencias a tu creatividad." } },
  { n: 10, text: "Ante un cambio imprevisto en los planes, tu actitud inicial es:", opts: { A: "Adaptarte al instante probando sobre la marcha.", B: "Evaluar el comportamiento de otros y ajustar tu rol.", C: "Detenerte a analizar las causas y consecuencias.", D: "Reaccionar rápido tomando el camino más corto.", E: "Ajustar el sistema general reestructurando el plan.", F: "Ver la interrupción como oportunidad para inventar algo." } },
  { n: 11, text: "¿Cuál de estas frases describe mejor tu filosofía personal al aprender?", opts: { A: "La práctica hace al maestro; prefiero hacer que teorizar.", B: "El conocimiento se construye en la interacción con otros.", C: "Sin datos, evidencia y lógica no hay aprendizaje.", D: "Lo bueno y breve, dos veces bueno; importa el resultado.", E: "Para dominar una parte hay que comprender la totalidad.", F: "Cuestiona las reglas y busca tu propio camino." } },
  { n: 12, text: "Al momento de tomar una decisión importante, te basas principalmente en:", opts: { A: "La experiencia previa práctica al ejecutarla.", B: "El impacto interpersonal y la comunicación.", C: "Evaluación objetiva de pros y contras respaldada en datos.", D: "La rapidez con la que se obtendrán los resultados.", E: "La coherencia con tus reglas y modelos estructurales.", F: "Tu intuición profunda, visión y autonomía." } },
  { n: 13, text: "¿Qué tipo de lecturas o contenidos prefieres consumir?", opts: { A: "Guías prácticas y tutoriales de hazlo tú mismo.", B: "Casos de estudio interpersonales o debates.", C: "Reportes técnicos, ensayos analíticos y estadísticas.", D: "Resúmenes ejecutivos y síntesis de alto impacto.", E: "Manuales metodológicos y arquitectura de procesos.", F: "Contenidos sobre innovación y filosofía disruptiva." } },
  { n: 14, text: "Cuando cometes un error durante un proceso, tu reacción es:", opts: { A: "Corregirlo al instante mediante ensayo y error.", B: "Conversar sobre lo sucedido para entender reacciones.", C: "Rastrear el punto exacto del fallo lógico.", D: "Minimizar el detalle, solucionar urgente y seguir.", E: "Modificar el procedimiento para blindar el sistema.", F: "Reflexionar a solas para hallar una perspectiva inédita." } },
  { n: 15, text: "En un proyecto, ¿cuál de las siguientes actividades te genera mayor satisfacción?", opts: { A: "La fase de ejecución en terreno.", B: "Las reuniones de presentación o dinámicas de grupo.", C: "La fase de auditoría y análisis de calidad.", D: "Resolver crisis imprevistas en tiempo récord.", E: "El diseño de la arquitectura del proyecto y flujogramas.", F: "El diseño de soluciones creativas no resueltas antes." } },
  { n: 16, text: "¿Cómo te defines en cuanto a tu estilo de trabajo?", opts: { A: "Práctico, activo y orientado a la acción inmediata.", B: "Expresivo, comunicativo y adaptable al entorno.", C: "Lógico, observador, cauteloso y metódico.", D: "Directo, impaciente con detalles y enfocado en metas.", E: "Sistemático, estructurado y organizador.", F: "Autónomo, visionario e independiente." } },
  { n: 17, text: "¿Qué te causa mayor frustración al momento de aprender o trabajar?", opts: { A: "Estar sentado escuchando teoría sin poder hacer nada.", B: "Trabajar en aislamiento total sin intercambiar ideas.", C: "La falta de rigor e improvisación sin datos.", D: "Rodeos, burocracia y reuniones sin decisiones.", E: "El desorden, caos y falta de un método claro.", F: "Que te impongan reglas rígidas que limiten tu libertad." } },
  { n: 18, text: "Al evaluar el éxito de una capacitación, el indicador más importante es:", opts: { A: "Haber adquirido una destreza práctica para aplicar hoy.", B: "Haber mejorado tu capacidad de comunicar e influir.", C: "Haber comprendido los datos y fundamentos.", D: "Haber obtenido herramientas concretas que ahorren tiempo.", E: "Tener un marco conceptual claro de todo el conocimiento.", F: "Haber descubierto nuevas perspectivas de desarrollo." } }
];

// RENDERIZAR PREGUNTAS
const container = document.getElementById("questionsContainer");
preguntas.forEach(q => {
  const div = document.createElement("div");
  div.className = "question-card";
  let optionsHTML = "";
  for (let key in q.opts) {
    optionsHTML += `
      <label>
        <input type="radio" name="q${q.n}" value="${key}" required>
        <span><strong>${key})</strong> ${q.opts[key]}</span>
      </label>
    `;
  }
  div.innerHTML = `<p><strong>${q.n}. ${q.text}</strong></p><div class="option-group">${optionsHTML}</div>`;
  container.appendChild(div);
});

// MANEJAR ENVÍO DEL CUESTIONARIO
document.getElementById("quizForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("userName").value;
  const counts = { A:0, B:0, C:0, D:0, E:0, F:0 };

  for (let i = 1; i <= 18; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) counts[selected.value]++;
  }

  const percentages = {
    "Ejecución Directa": Math.round((counts.A / 18) * 100),
    "Simulación y Escenario": Math.round((counts.B / 18) * 100),
    "Analítico de Precisión": Math.round((counts.C / 18) * 100),
    "Reactivo de Alta Presión": Math.round((counts.D / 18) * 100),
    "Estructural y Sistemático": Math.round((counts.E / 18) * 100),
    "Autónomo Creativo": Math.round((counts.F / 18) * 100)
  };

  let maxPerc = -1;
  let estiloPredominante = "";
  for (let style in percentages) {
    if (percentages[style] > maxPerc) {
      maxPerc = percentages[style];
      estiloPredominante = style;
    }
  }

  // Guardar en Supabase
  await supabaseClient.from('resultados_aprendizaje').insert([{
    nombre_usuario: name,
    ejecucion_directa: percentages["Ejecución Directa"],
    simulacion_escenario: percentages["Simulación y Escenario"],
    analitico_precision: percentages["Analítico de Precisión"],
    reactivo_presion: percentages["Reactivo de Alta Presión"],
    estructural_sistematico: percentages["Estructural y Sistemático"],
    autonomo_creativo: percentages["Autónomo Creativo"],
    estilo_predominante: estiloPredominante
  }]);

  // Mostrar Resultados
  document.getElementById("quizSection").classList.add("hidden");
  document.getElementById("resultSection").classList.remove("hidden");

  // Renderizar Chart Hexagonal
  const ctx = document.getElementById('radarChart').getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: Object.keys(percentages),
      datasets: [{
        label: 'Afinidad %',
        data: Object.values(percentages),
        backgroundColor: 'rgba(217, 130, 43, 0.3)',
        borderColor: '#d9822b',
        pointBackgroundColor: '#d9822b',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        r: { min: 0, max: 100, ticks: { stepSize: 20 } }
      }
    }
  });

  const summaryDiv = document.getElementById("resultsSummary");
  summaryDiv.innerHTML = "";
  for (let style in percentages) {
    summaryDiv.innerHTML += `
      <div class="result-item">
        <strong>${style}</strong>: ${percentages[style]}%
      </div>
    `;
  }

  document.getElementById("predominantTitle").innerText = `Tu Estilo Predominante: ${estiloPredominante} (${maxPerc}%)`;
  document.getElementById("predominantDesc").innerText = guiaEnsenanza[estiloPredominante];
  document.getElementById("courseLink").href = enlacesCursos[estiloPredominante];
});

// MANEJO DE ADMINISTRACIÓN
document.getElementById("adminBtn").addEventListener("click", () => {
  document.getElementById("quizSection").classList.add("hidden");
  document.getElementById("resultSection").classList.add("hidden");
  document.getElementById("adminSection").classList.remove("hidden");
});

document.getElementById("closeAdminBtn").addEventListener("click", () => {
  document.getElementById("adminSection").classList.add("hidden");
  document.getElementById("quizSection").classList.remove("hidden");
});

document.getElementById("loginAdminBtn").addEventListener("click", async () => {
  const input = document.getElementById("adminPass").value;
  if (input === ADMIN_PASSWORD) {
    document.getElementById("adminAuth").classList.add("hidden");
    document.getElementById("adminContent").classList.remove("hidden");
    
    // Cargar Datos de Supabase
    const { data, error } = await supabaseClient.from('resultados_aprendizaje').select('*').order('fecha', { ascending: false });
    const tbody = document.getElementById("adminTableBody");
    tbody.innerHTML = "";
    
    if (data) {
      data.forEach(row => {
        tbody.innerHTML += `
          <tr>
            <td>${new Date(row.fecha).toLocaleDateString()}</td>
            <td>${row.nombre_usuario}</td>
            <td><strong>${row.estilo_predominante}</strong></td>
            <td>A:${row.ejecucion_directa}% | B:${row.simulacion_escenario}% | C:${row.analitico_precision}% | D:${row.reactivo_presion}% | E:${row.estructural_sistematico}% | F:${row.autonomo_creativo}%</td>
            <td>${guiaEnsenanza[row.estilo_predominante]}</td>
          </tr>
        `;
      });
    }
  } else {
    alert("Contraseña incorrecta");
  }
});
