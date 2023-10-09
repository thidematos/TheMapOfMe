'use strict';

const spaceContainer = document.querySelector('.spaces__container');
const piecesContainer = document.querySelector('.pieces__container');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalDescription = document.querySelector('.modal__description');
const modalCover = document.querySelector('.modal__cover');

class App {
  elDragged;
  spaces;
  pieces;
  rightMoves = 0;
  constructor(numX, numY) {
    this.#createPieces(numX, numY);
  }

  #createPieces(numPiecesX, numPiecesY) {
    const height = Number.parseInt(getComputedStyle(spaceContainer).height);
    const width = Number.parseInt(getComputedStyle(spaceContainer).width);

    const pieceHeight = height / numPiecesY;
    const pieceWidth = width / numPiecesX;

    console.log(pieceHeight);
    console.log(pieceWidth);

    const xContainerHtml = `
  <div style='height: ${pieceHeight}px; width: 100%' class="xcontainer__wrapper borders flex flex-row flex-nowrap justify-center items-center"></div>
  `;

    const yContainerHtml = `
  <img style='height: 100%; width: ${pieceWidth}px' src="assets/transparent.png" class="space borders block spaces " alt=""/>
  `;

    for (let i = 1; i <= numPiecesY; i++) {
      spaceContainer.insertAdjacentHTML('beforeend', xContainerHtml);
    }

    const xcontainer = [...document.querySelectorAll('.xcontainer__wrapper')];

    xcontainer.at(-1).style.borderBottom = '1px solid rgb(251 146 60)';

    xcontainer.at(0).style.borderTop = 'none';

    xcontainer.forEach((container) => {
      for (let i = 1; i <= numPiecesX; i++) {
        container.insertAdjacentHTML('beforeend', yContainerHtml);
      }
    });
    const spaces = document.querySelectorAll('.space');
    this.spaces = spaces;
    this.#renderSpaces(spaces, 'smile');
  }

  #renderSpaces(spacesArr, imgPath) {
    spacesArr.forEach((space, i) => {
      space.dataset.space = i + 1;

      const html = `
      <img
            src="assets/${imgPath}-${i + 1}.png"
            alt=""
            style='order: ${Math.trunc(Math.random() * 32)}; '
            class="piece borders block"
            draggable="true"
            data-piece='${i + 1}'
          />
      `;

      piecesContainer.insertAdjacentHTML('beforeend', html);

      space.addEventListener('dragover', (e) => {
        e.preventDefault();
        const piece = document.querySelector('.is-dragging');
        if (e.target.dataset.completed) return;
        if (!piece) return;
        space.src = piece.src;
      });

      space.addEventListener('dragleave', (e) => {
        if (!this.elDragged) return;
        if (e.target.dataset.completed) return;
        console.log('Drag Leave!');
        space.src = 'assets/transparent.png';
      });

      space.addEventListener('drop', (e) => {
        if (!this.elDragged) return;

        console.log('Dropped');
        console.log(e.target.dataset.space);
        console.log(this.elDragged.dataset.piece);

        if (e.target.dataset.space === this.elDragged.dataset.piece) {
          e.target.src = this.elDragged.src;
          e.target.dataset.completed = true;

          this.elDragged.remove();
          this.elDragged = null;
          this.rightMoves++;
          console.log(this.rightMoves);
          this.#verifyWin(this.pieces);
        } else {
          if (e.target.dataset.completed) return;
          e.target.src = 'assets/transparent.png';
        }
      });
    });

    const pieces = document.querySelectorAll('.piece');
    this.pieces = pieces;
    this.#renderPieces(pieces);
  }

  #renderPieces(piecesArr) {
    piecesArr.forEach((piece, i) => {
      piece.style.width = getComputedStyle(this.spaces[i]).width;
      piece.style.height = getComputedStyle(this.spaces[i]).height;

      piece.addEventListener('dragstart', (e) => {
        console.log('Drag Started');
        piece.classList.add('is-dragging');
        this.elDragged = e.target;
      });

      piece.addEventListener('dragend', (e) => {
        console.log('Drag Ended');
        console.log(e);
        piece.classList.remove('is-dragging');
      });
    });
  }

  #verifyWin(pieces) {
    if (pieces.length === this.rightMoves) {
      console.log('You win!');
      this.rightMoves = 0;
      piecesContainer.classList.add('hidden');

      this.#showVictoryModal(
        'Sorriso é felicidade',
        'Bernardo nos mostrou que, quando estamos felizes, damos um sorriso bem bonito!'
      );
    }
  }

  #configureModal() {
    modalCover.style.backgroundColor = 'rgba(0,0,0,0.5)';
    const body = document.querySelector('body');
    modalCover.style.width = getComputedStyle(body).width;
    modalCover.style.height = getComputedStyle(body).height;
  }

  #showVictoryModal(title, description) {
    this.#configureModal();
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.style.opacity = 1;
      modal.classList.add('flex');
    }, 100);

    modalCover.classList.remove('hidden');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
  }
}

const app = new App(3, 2);

/*
rotate: ${Math.trunc(
    Math.random() * 45
  )}deg

addEventListener('drag', () => {
  
});

addEventListener('dragenter', (e) => {
  console.log(e);
});

addEventListener('drop', (e) => {
  console.log(e);
});
*/
