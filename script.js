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
  {
    n: 1,
    text: "Cuando te entregan una herramienta o equipo nuevo que no conoces, ¿qué haces primero?",
    opts: {
      A: "Empiezas a probarlo de una vez para ver cómo funciona.",
      B: "Le pides a un compañero que te explique cómo se usa.",
      C: "Lees las instrucciones completas antes de encenderlo o moverlo.",
      D: "Pides que te digan rápido los pasos básicos para ponerlo a trabajar de inmediato.",
      E: "Observas cómo está armado y cómo funciona cada una de sus partes.",
      F: "Buscas por tu cuenta una forma distinta de usarlo que no venga en las instrucciones."
    }
  },
  {
    n: 2,
    text: "Si surge un problema en el trabajo y deben resolverlo en equipo, ¿cómo ayudas mejor?",
    opts: {
      A: "Poniendo manos a la obra de inmediato para avanzar con el trabajo físico.",
      B: "Platicando con el grupo para ponernos de acuerdo y repartir las tareas.",
      C: "Analizando bien qué provocó el fallo antes de dar una opinión.",
      D: "Tomando decisiones rápidas para solucionar lo más urgente sin perder tiempo.",
      E: "Organizando los pasos y el orden exacto en que van a trabajar.",
      F: "Proponiendo una solución diferente que a nadie más se le había ocurrido."
    }
  },
  {
    n: 3,
    text: "¿De qué manera aprendes mejor cuando te enseñan algo nuevo?",
    opts: {
      A: "Practicando tú mismo desde el primer momento.",
      B: "Mediante pláticas en grupo, ejemplos prácticos y dinámicas con tus compañeros.",
      C: "Viendo imágenes, listas sencillas y explicaciones paso a paso.",
      D: "Con explicaciones breves y directas sobre cómo resolver el trabajo.",
      E: "Conociendo todo el proceso de inicio a fin para entender el proceso completo.",
      F: "Explorando tú solo a tu propio ritmo, sin presión."
    }
  },
  {
    n: 4,
    text: "Cuando hay mucha carga de trabajo y poco tiempo para entregar, tú generalmente:",
    opts: {
      A: "Te apoyas en lo que ya sabes hacer con la práctica y trabajas a buen ritmo.",
      B: "Platicas con el equipo para acomodarse bien y mantener el control.",
      C: "Revisas las tareas dos veces para evitar cometer equivocaciones.",
      D: "Tomas decisiones al instante para resolver lo más urgente de inmediato.",
      E: "Haces una lista de pendientes para ir tachando lo que vas terminando.",
      F: "Te concentras a solas un momento para pensar cómo resolverlo a tu manera."
    }
  },
  {
    n: 5,
    text: "¿Qué tipo de información recuerdas con mayor facilidad?",
    opts: {
      A: "Las actividades que realizaste tú mismo con la práctica.",
      B: "Las conversaciones, explicaciones o consejos que te compartieron tus compañeros.",
      C: "Las reglas, los datos exactos y la información por escrito.",
      D: "Las indicaciones cortas y los consejos prácticos para el momento.",
      E: "El orden completo de un proceso, desde el principio hasta el final.",
      F: "Las ideas o soluciones nuevas que descubriste por tu cuenta."
    }
  },
  {
    n: 6,
    text: "Cuando alguien te da una explicación muy larga y teórica, ¿cuál es tu reacción?",
    opts: {
      A: "Te impacientas porque prefieres empezar a practicar.",
      B: "Interrumpes con preguntas para hacer la explicación más platicada.",
      C: "Tomas notas con cuidado para revisar si la información es correcta.",
      D: "Pides que vayan al punto principal y te digan exactamente qué hacer.",
      E: "Tratas de acomodar la información dentro de los procesos que ya conoces.",
      F: "Te distraes pensando en tus propias ideas o en otras formas de hacerlo."
    }
  },
  {
    n: 7,
    text: "¿Cómo prefieres organizar las tareas de tu día?",
    opts: {
      A: "Realizando directamente la primera tarea que tienes enfrente hasta terminarla.",
      B: "Hablando con tus compañeros para definir qué es lo más importante.",
      C: "Anotando todo en una libreta con horarios y detalles claros.",
      D: "Anotando únicamente los 2 o 3 pendientes más urgentes del turno.",
      E: "Utilizando una lista ordenada por pasos o niveles de importancia.",
      F: "Anotando a tu estilo, con esquemas, notas o guías propias."
    }
  },
  {
    n: 8,
    text: "Si debes capacitar a un compañero nuevo, ¿cómo le enseñas?",
    opts: {
      A: "Le entregas las herramientas y lo vas guiando mientras él realiza el trabajo.",
      B: "Realizan un ejemplo simulado y platican sobre cómo resolver distintos problemas.",
      C: "Le entregas una guía escrita y le explicas el motivo de cada paso.",
      D: "Le muestras cómo se hace en medio minuto y le pides que lo repita.",
      E: "Le explicas primero cómo funciona todo el trabajo para que entienda el orden.",
      F: "Le das las indicaciones generales y le permites encontrar su propia forma de trabajar."
    }
  },
  {
    n: 9,
    text: "¿En qué tipo de ambiente te sientes más cómodo trabajando?",
    opts: {
      A: "En un espacio donde haya actividad constante y libertad de movimiento.",
      B: "En un ambiente con convivencia constante y comunicación entre compañeros.",
      C: "En un lugar tranquilo donde puedas concentrarte sin distracciones.",
      D: "En un ambiente dinámico donde se cumplan las metas con rapidez.",
      E: "En un espacio ordenado, donde las reglas y procesos estén bien definidos.",
      F: "En un entorno donde te permitan trabajar de forma independiente."
    }
  },
  {
    n: 10,
    text: "Si a mitad de la jornada cambia la forma de realizar el trabajo, ¿qué haces?",
    opts: {
      A: "Te adaptas rápidamente y vas aprendiendo los cambios sobre la marcha.",
      B: "Observas cómo reacciona el grupo y te organizas con ellos.",
      C: "Te detienes a revisar el motivo del cambio y lo que podría fallar.",
      D: "Actúas con rapidez tomando la opción más directa para terminar a tiempo.",
      E: "Reorganizas tus tareas para mantener el orden y el control.",
      F: "Aprovechas el cambio para proponer una forma más práctica de trabajar."
    }
  },
  {
    n: 11,
    text: "¿Cuál de estas frases se relaciona mejor con tu forma de pensar en el trabajo?",
    opts: {
      A: "\"La práctica hace al maestro; es mejor hacer que solo hablar.\"",
      B: "\"El trabajo sale mejor cuando hay buena comunicación en el equipo.\"",
      C: "\"Para hacer bien las cosas hay que seguir las instrucciones y cuidar los detalles.\"",
      D: "\"Lo breve y directo es mejor; lo importante es entregar resultados.\"",
      E: "\"Es necesario entender todo lo que se hace antes de cambiar algo.\"",
      F: "\"No siempre hay que seguir el mismo camino; se pueden buscar nuevas opciones.\""
    }
  },
  {
    n: 12,
    text: "Al tomar una decisión importante en tu turno, te basas principalmente en:",
    opts: {
      A: "La experiencia que has adquirido al realizar tareas similares anteriormente.",
      B: "El impacto que tendrá en el equipo y lo que conversaste con ellos.",
      C: "Analizar las ventajas y desventajas con la información disponible.",
      D: "La opción que brinde el resultado más rápido y efectivo.",
      E: "Lo que establecen las reglas y los procedimientos de la empresa.",
      F: "Tu intuición o una idea propia que consideras que funcionará."
    }
  },
  {
    n: 13,
    text: "Si te entregan material de lectura o videos para capacitarte, prefieres:",
    opts: {
      A: "Guías prácticas con imágenes paso a paso.",
      B: "Ejemplos de casos reales platicados por otros compañeros.",
      C: "Tarjetas con datos precisos y explicaciones claras.",
      D: "Hojas breves de una sola página con los puntos más importantes.",
      E: "Guías completas con tablas y la secuencia de los pasos.",
      F: "Información sobre ideas innovadoras o formas distintas de trabajar."
    }
  },
  {
    n: 14,
    text: "Cuando cometes un error durante el trabajo, tu primera reacción es:",
    opts: {
      A: "Corregirlo en el momento intentando otra forma de hacerlo con la práctica.",
      B: "Comentarlo con tu compañero o encargado para acordar cómo solucionarlo.",
      C: "Identificar exactamente en qué paso estuvo la falla para que no vuelva a ocurrir.",
      D: "Resolverlo rápidamente para continuar con tus actividades sin detenerte.",
      E: "Consultar lo que hay que hacer para asegurarte de seguir el orden correcto.",
      F: "Reflexionar a solas sobre lo sucedido para comprender la causa y aprender de ello."
    }
  },
  {
    n: 15,
    text: "¿Qué momento de tu jornada de trabajo te brinda mayor satisfacción?",
    opts: {
      A: "Estar en actividad constante realizando el trabajo práctico.",
      B: "Las reuniones de equipo, la cooperación y la atención a las personas.",
      C: "Comprobar que el trabajo quedó bien hecho y sin errores de calidad.",
      D: "Resolver imprevistos o situaciones difíciles en poco tiempo.",
      E: "Dejar el área limpia, ordenada y con los pasos bien organizados.",
      F: "Encontrar un método nuevo que facilite o mejore la tarea."
    }
  },
  {
    n: 16,
    text: "¿Cómo te defines como trabajador?",
    opts: {
      A: "Práctico, activo y enfocado en la acción constante.",
      B: "Comunicativo, accesible y con facilidad para relacionarte con el equipo.",
      C: "Observador, precavido y atento a los detalles.",
      D: "Directo, enfocado en las metas y sin rodeos.",
      E: "Ordenado, disciplinado y constante con los procedimientos.",
      F: "Independiente, creativo y con iniciativa para proponer ideas."
    }
  },
  {
    n: 17,
    text: "¿Qué es lo que más te aburre o molesta durante una capacitación?",
    opts: {
      A: "Permanecer sentado escuchando explicaciones sin realizar ejercicios prácticos.",
      B: "Estar aislado leyendo sin posibilidad de comentar el tema con otros.",
      C: "Que la información se entregue en desorden o sin datos claros.",
      D: "Las explicaciones demasiado largas que no llegan a conclusiones útiles.",
      E: "La falta de organización, el desorden o saltarse pasos del proceso.",
      F: "Que te impongan una sola forma de trabajar sin dar espacio a sugerencias."
    }
  },
  {
    n: 18,
    text: "¿Cuándo consideras que una capacitación fue verdaderamente útil?",
    opts: {
      A: "Cuando aprendiste una técnica fácil que puedes aplicar desde hoy.",
      B: "Cuando te ayudó a mejorar la comunicación y el trabajo con otras personas.",
      C: "Cuando comprendiste con claridad las razones detrás del trabajo.",
      D: "Cuando obtuviste soluciones rápidas que te ayudan a ahorrar tiempo.",
      E: "Cuando te quedó claro el orden y la secuencia de todos los pasos.",
      F: "Cuando te aportó ideas nuevas para mejorar tu desempeño de forma autónoma."
    }
  }
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
  const nombreUsuario = document.getElementById("userName").value.trim() || "Anónimo";
const nominaUsuario = document.getElementById("userNomina").value.trim() || "0";
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
    numero_nomina: nominaUsuario,
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
            <td>${row.numero_nomina || '0'}</td>
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
