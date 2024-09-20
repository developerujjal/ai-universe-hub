const toolsDataLoad = async (isShowAll) => {
    const response = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const dataPromise = await response.json();
    const data = dataPromise.data.tools;
    displayTools(data, isShowAll)
}


const displayTools = (tools, isShowAll) => {

    const aiCardElement = document.querySelector('.ai-card');
    aiCardElement.textContent = "";

    if(!isShowAll){
        tools = tools.splice(0, 6);
    }
    else{
        const btnSeeMore = document.getElementById('see-more-btn');
        btnSeeMore.classList.add('hidden');
    }


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
                                <div onclick="displayModal(true); loadModalInfo('${tool.id}')" class="arrow-right">
                                    <i class="material-icons">east</i>
                                </div>
                            </div>
                        </div>
        
        `;

        aiCardElement.appendChild(newDiv);
    })
}




// See More
const displayAllToots = () => {
    toolsDataLoad(true);
}



// modal show
const displayModal = (x) => {
    const aiModal = document.getElementById('aiModal');
    if(x){
        aiModal.classList.remove('hidden');
    }
    else{
        aiModal.classList.add('hidden');
    }
    
}



const loadModalInfo = async (id) => {
    const fetchInfo = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const dataPromise = await fetchInfo.json();
    const data = dataPromise.data;
    displayModalInfo(data);

}


const displayModalInfo = (featureInfo) => {

   const modalMainElement = document.getElementById('modal-main');
   modalMainElement.innerHTML = `
   
                        <span onclick="closeModal()" class="cross-icon">&times;</span>
                        <div class="modal-content-img-container">
                            <div class="modal-content-box">
                                <div class="modal-des">
                                    <p>${featureInfo.description}</p>
                                </div>
                                <div class="modal-price-container">
                                    <div class="bc-price basic-price">
                                        <span class="one">${featureInfo.pricing[0].price} <span>${featureInfo.pricing[0].plan}</span></span>
                                    </div>
                                    <div class="pro-price basic-price">
                                        <span>${featureInfo.pricing[1].price} <span>${featureInfo.pricing[1].plan}</span></span>
                                    </div>
                                    <div class="enterprise-price basic-price">
                                        <span>${featureInfo.pricing[2].price} <span>${featureInfo.pricing[2].plan}</span></span>
                                    </div>
                                </div>
                                <div class="modal-feature-inte-container">
                                    <div class="feature">
                                        <h3>Features</h3>
                                        <ul>
                                            <li>${featureInfo?.features['1']?.feature_name}</li>
                                            <li>${featureInfo?.features['2']?.feature_name}</li>
                                            <li>${featureInfo?.features['3']?.feature_name}</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h3>Integrations</h3>
                                        <ul>
                                            <li>${featureInfo?.integrations[0]}</li>
                                            <li>${featureInfo?.integrations[1]}</li>
                                            <li>${featureInfo?.integrations[2]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-img-box">
                                <div class="modal-img">
                                    <img src="${featureInfo?.image_link[0] }" alt="">
                                    <div class="accuracy">
                                        <p><span>${featureInfo?.accuracy?.score}</span> accuracy</p>
                                    </div>
                                </div>
                                <div class="modal-img-des">
                                    <h3>${featureInfo?.input_output_examples[0]?.input}</h3>
                                    <p>${featureInfo?.input_output_examples[0]?.output}</p>
                                </div>
                            </div>
                        </div>
   
   `;
}


//Model close
const closeModal = () => {
    displayModal(false)
}


toolsDataLoad()