import { backgrounds } from './BackgroundButtons';
import { borders } from './BorderButtons'
import { calcZoomIn, calcZoomOut } from './calcZoom';

function nextBorder(current: string): string {
    const currentIndex = borders.findIndex((border) => border.value === current);
    const nextIndex = (currentIndex + 1) % borders.length;
    return borders[nextIndex].value;
}

function nextBackground(current: string): string {
    const currentIndex = backgrounds.findIndex((background) => background.value === current);
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    return backgrounds[nextIndex].value;
}

function keyHandler(searchParams: URLSearchParams, background: string, border: string, currentZoom: number, e: KeyboardEvent): URLSearchParams | null {

    switch (e.key.toLocaleLowerCase()) {
        case '1':
            searchParams.set('zoom', '1');
            return searchParams;
        case 'b':
            searchParams.set('border', nextBorder(border));
            return searchParams;
        case 'i':
            searchParams.set('zoom', 'icons');
            return searchParams;
        case 'm':
            searchParams.set('zoom', 'max');
            return searchParams;
        case 'x':
            searchParams.set('debug', searchParams.get('debug') === '1' ? '0' : '1');
            return searchParams;
        case '+':
            searchParams.set('zoom', calcZoomIn(currentZoom).toString());
            return searchParams;
        case ' ':
            searchParams.set('bg', nextBackground(background));
            return searchParams;
        case '-':
            searchParams.set('zoom', calcZoomOut(currentZoom).toString());
            return searchParams;
    }
    return null;
}

export { keyHandler };
