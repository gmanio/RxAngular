import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
  trigger('slideInOutAnimation', [

    state('*', style({
      position: 'absolute',
      display: 'block',
      width: '100%',
      minHeight: '100%',
      top: 0,
      left: 0
    })),

    // when enter page
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),

    // when leave page
    transition(':leave', [
      animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ])
  ]);
