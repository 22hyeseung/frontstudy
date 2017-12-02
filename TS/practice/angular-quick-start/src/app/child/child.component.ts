import { Component, OnInit, OnChanges, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy, Input, Output, EventEmitter } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit, OnChanges {

  @Input() name
  @Input() age
  @Output() next = new EventEmitter()

  constructor() {
    console.error('constructor')
  }

  ngOnInit() {
    console.error('ngOnInit')
    setInterval(()=>{
      this.next.emit()
    },3000)
  }

  ngOnChanges() {
    console.error('ngOnChanges')
  }

  click(text, event) {
    console.log(text)
    console.log(event)
  }

}
