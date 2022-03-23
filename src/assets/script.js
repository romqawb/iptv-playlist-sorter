export const manageChannels = () => {
    // const rightButton = document.querySelector('#moveRight');
    const leftButton = document.querySelector('#moveLeft');
    const leftUl = document.querySelector('.left-ul');
    // const rightUl = document.querySelector('.right-ul');

    let buttonHandler = (button, ulToAppendTo, ulSelector) => {
        button.addEventListener('click', () => {
            const selectedLis = document.querySelectorAll(ulSelector);
            for (let selected of selectedLis) {
                if (selected.classList.contains('selected')) {
                    selected.classList.toggle('selected');
                    selected.classList.toggle('channel-to-keep');
                    ulToAppendTo.appendChild(selected);
                }
            }
        })
    }

    let ulHandler = (ul, ulClass) => {
        let lastEle;
        let currentEle;
        ul.addEventListener('click', (e) => {
            const lis = document.querySelectorAll(`.${ulClass} li`);
            const liArr = [...lis];
            e.target.nodeName === 'LI' && e.target.classList.toggle('selected');
            lastEle = currentEle;
            currentEle = e.target;
            if (e.shiftKey) {
                let currentEleIndex = liArr.indexOf(currentEle);
                let lastEleIndex = liArr.indexOf(lastEle);
                if (currentEleIndex > lastEleIndex) {
                    while (currentEleIndex !== lastEleIndex) {
                        lis.item(currentEleIndex).classList.add('selected');
                        currentEleIndex--;
                    }
                } else {
                    while (lastEleIndex !== currentEleIndex) {
                        lis.item(currentEleIndex).classList.add('selected');
                        currentEleIndex++;
                    }
                }
            }
        });
    }

    ulHandler(leftUl, 'left-ul');
    // ulHandler(rightUl, 'right-ul');
    // buttonHandler(rightButton, rightUl, '.left-ul .selected');
    buttonHandler(leftButton, leftUl, '.right-ul .channel-to-keep');

}


export const generateChannels = (channels) => {
    const selectedChannels = document.querySelectorAll('.channel-to-keep');
    let selectedChannelNames = [];
    if (selectedChannels.length > 0) {
        for (let channel of selectedChannels) {
            selectedChannelNames.push(channel.innerText.trim());
        }
        window.localStorage.setItem('selectedChannels', JSON.stringify(channels.filter(channel => selectedChannelNames.includes(channel.name))))
    }
}