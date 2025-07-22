document.addEventListener('DOMContentLoaded', function () {
    // --- Inicialización de Mermaid.js ---
    // Se configura para que no se inicie automáticamente al cargar la página.
    mermaid.initialize({ 
        startOnLoad: false, 
        theme: 'base',
        themeVariables: {
            background: '#f9fafb',
            primaryColor: '#f9fafb',
            primaryTextColor: '#301934',
            primaryBorderColor: '#FF8C00',
            lineColor: '#301934',
            secondaryColor: '#FFA500',
            tertiaryColor: '#f9fafb',
            textColor: '#301934',
        }
    });
    
    /**
     * Función para renderizar un diagrama de Mermaid en un elemento específico.
     * @param {string} elementId - El ID del elemento contenedor para el diagrama.
     * @param {string} graphDefinition - La definición del gráfico en sintaxis de Mermaid.
     */
    const renderMermaid = (elementId, graphDefinition) => {
        const element = document.getElementById(elementId);
        if (element) {
            try {
                const { svg } = mermaid.render(elementId + '-svg', graphDefinition);
                element.innerHTML = svg;
            } catch (e) {
                console.error(`Error al renderizar el diagrama de Mermaid para #${elementId}:`, e);
                if(element) element.innerHTML = "<p class='text-red-500 p-4'>Error al cargar diagrama.</p>";
            }
        }
    };
    
    // Renderizar los diagramas específicos
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

    // El gráfico D3 se puede añadir aquí si se decide incluirlo en una tarjeta o sección.
    // Por ahora, se omite para mantener el diseño limpio de las tarjetas de volteo.
});
