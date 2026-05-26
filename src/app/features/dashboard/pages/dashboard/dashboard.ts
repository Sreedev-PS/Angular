import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FeatureLink {
  title: string;
  path: string;
  description: string;
  accent: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardPage {
  features: FeatureLink[] = [
    {
      title: 'Signal DOM View',
      path: 'signal-dom-view',
      description: 'Live signal UI and DOM binding demo',
      accent: '#7C6FFF',
    },
    {
      title: 'Amazone Dashboard',
      path: 'amazone-dashboard',
      description: 'Amazon-style dashboard example',
      accent: '#00D4E5',
    },
    {
      title: 'Flipkart Dashboard',
      path: 'page2',
      description: 'Flipkart dashboard example',
      accent: '#FFB800',
    },
    {
      title: 'Structural Directives',
      path: 'directives',
      description: 'Show structural directive samples',
      accent: '#FF5F7A',
    },
    {
      title: 'Attribute Directive',
      path: 'attr-directive',
      description: 'Test custom attribute directives',
      accent: '#8DFF7A',
    },
    {
      title: 'Host Binding & Listeners',
      path: 'hLBAD',
      description: 'Host bindings and listeners demo',
      accent: '#6DF7C5',
    },
    {
      title: 'Pipes',
      path: 'pipes',
      description: 'Pipe transformations and usage',
      accent: '#E46BFF',
    },
    {
      title: 'Injection Token',
      path: 'injection-token',
      description: 'DI injection token example',
      accent: '#4EC9FF',
    },
    {
      title: 'Routing',
      path: 'router',
      description: 'Router feature with nested routes',
      accent: '#FF7A49',
    },
    {
      title: 'Guards',
      path: 'guard',
      description: 'Route guard demonstrations',
      accent: '#4A95FF',
    },
    {
      title: 'Preloading',
      path: 'preload',
      description: 'Preloading strategy examples',
      accent: '#2BFFB9',
    },
    {
      title: 'Template-Driven Forms',
      path: 'form/template',
      description: 'Template form examples',
      accent: '#FF4ECE',
    },
    {
      title: 'Reactive Forms',
      path: 'form/reactive',
      description: 'Reactive form examples',
      accent: '#00C8FF',
    },
    {
      title: 'Dynamic Forms',
      path: 'form/dynamic',
      description: 'Dynamic form generation demo',
      accent: '#FFD23A',
    },
    {
      title: 'Interceptor',
      path: 'interceptor',
      description: 'HTTP interceptor feature',
      accent: '#A944FF',
    },
    {
      title: 'Signal Communication',
      path: 'signal/communication',
      description: 'Signal communication between components',
      accent: '#4BE5FF',
    },
    {
      title: 'Signal Model',
      path: 'signal/model',
      description: 'Signal model communication demo',
      accent: '#FF6EEE',
    },
    {
      title: 'Content Projection',
      path: 'lifecycle/content',
      description: 'Content projection and lifecycle demo',
      accent: '#58FF8C',
    },
    {
      title: 'Host Binding',
      path: 'host/bl',
      description: 'Host binding and lifecycle demo',
      accent: '#FF9D3E',
    },
    {
      title: 'Deep Content Projection',
      path: 'project-depth',
      description: 'Nested content projection demo',
      accent: '#5A82FF',
    },
    {
      title: 'Dynamic Component',
      path: 'dynamic-component',
      description: 'Attach and display dynamic components',
      accent: '#18E5AD',
    },
  ];
}
