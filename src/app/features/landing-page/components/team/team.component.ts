import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="equipe" class="team-section">
      <div class="container-xxl">
        <h2 class="section-title">EQUIPE</h2>
        <div class="team-grid">
          <div class="team-card">
            <img src="/assets/images/photos/people/people1.png" alt="Team 1" />
            <div class="card-overlay">
              <div class="name-badge">
                <span class="role">ENGENHARIA</span>
                <span class="name">LIDERANÇA TÉCNICA</span>
              </div>
            </div>
          </div>
          <div class="team-card">
            <img src="/assets/images/photos/people/people2.png" alt="Team 2" />
            <div class="card-overlay">
              <div class="name-badge">
                <span class="role">PROJETOS</span>
                <span class="name">COORDENAÇÃO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-section {
      padding: 100px 0;
      background-color: #0c0d0e;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      margin-top: 4rem;
    }

    .team-card {
      position: relative;
      aspect-ratio: 4/5;
      overflow: hidden;
      border-radius: 4px;
      box-shadow: 0 30px 60px rgba(0,0,0,0.4);
    }

    .team-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .card-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 3rem;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      display: flex;
      align-items: flex-end;
    }

    .name-badge {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1.5rem 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .role {
      font-size: 0.65rem;
      font-weight: 800;
      letter-spacing: 0.3em;
      color: var(--color-primary-light);
    }

    .name {
      font-size: 1.2rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      color: #fff;
    }

    .team-card:hover img {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .team-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class TeamComponent {}
