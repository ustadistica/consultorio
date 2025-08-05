document.addEventListener('DOMContentLoaded', function () {
    // --- Inicialización de Mermaid.js ---
    // Se configura para que no se inicie automáticamente al cargar la página.
    mermaid.initialize({ 
        startOnLoad: false, 
        theme: 'base',
        themeVariables: {
            background: '#FFFFFF', // Fondo blanco para la tarjeta
            primaryColor: '#FFFFFF',
            primaryTextColor: '#011e3f', // Texto oscuro
            primaryBorderColor: '#FF8C00', // Naranja
            lineColor: '#011e3f',
            secondaryColor: '#FFA500',
            tertiaryColor: '#FFFFFF',
            textColor: '#011e3f',
        }
    });
    
    /**
     * Función para renderizar un diagrama de Mermaid en un elemento específico.
     * @param {string} elementId - El ID del elemento contenedor para el diagrama.
     * @param {string} graphDefinition - La definición del gráfico en sintaxis de Mermaid.
     */
    const renderMermaid = (elementId, graphDefinition) => {
        const element = document.getElementById(elementId);
        // Se verifica que el elemento exista antes de intentar renderizar.
        if (element) {
            try {
                // Se genera el SVG y se inserta en el elemento.
                mermaid.render(elementId + '-svg', graphDefinition, (svgCode) => {
                    element.innerHTML = svgCode;
                });
            } catch (e) {
                console.error(`Error al renderizar el diagrama de Mermaid para #${elementId}:`, e);
                if(element) element.innerHTML = "<p class='text-red-500 p-4'>Error al cargar diagrama.</p>";
            }
        } else {
            // Log si el elemento no se encuentra, para facilitar la depuración.
            console.warn(`El elemento con id #${elementId} no fue encontrado en el DOM.`);
        }
    };
    
    // Renderizar los diagramas específicos.
    // El código ahora encontrará los contenedores añadidos en index.html
    renderMermaid('mermaid-diseno', `
        graph TD;
            A[Idea] --> B{Pregunta Medible?};
            B -- Sí --> C[Hipótesis];
            B -- No --> D[Refinar];
            D --> C;
            C --> E[Plan de Análisis];
    `);

    renderMermaid('mermaid-ia', `
        graph LR;
            A[Datos] --> B(Entrenamiento);
            B --> C{Modelo ML};
            C --> D[Predicción];
    `);

});
