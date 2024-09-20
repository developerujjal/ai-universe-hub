
const ShowTools = (tools) => {

    const aiCardElement = document.querySelector('.ai-card');
    aiCardElement.textContent = "";

    tools.forEach(tool => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('singel-ai-card');
        newDiv.innerHTML = `
        
                            <div class="ai-card-img">
                                <img src="${tool.image}" alt="">
                            </div>
                            <div class="feature-ai-card">
                                <h3>Features</h3>
                                <div class="feature-list">
                                    <ol>
                                        <li>${tool.features[0]}</li>
                                        <li>${tool.features[1]}</li>
                                        <li>${tool.features[2]}</li>
                                    </ol>
                                </div>
                            </div>
                            <div class="date-ai-card-container">
                                <div class="date-ai-card">
                                    <h3>${tool.name}</h3>
                                    <div class="icons-ai-card">
                                        <i class="material-icons">date_range</i> <span>${tool.published_in}</span>
                                    </div>
                                </div>
                                <div class="arrow-right">
                                    <i class="material-icons">east</i>
                                </div>
                            </div>
                        </div>
        
        `;

        aiCardElement.appendChild(newDiv);
    })
}
