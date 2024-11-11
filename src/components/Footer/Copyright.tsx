import React from 'react'
import { Container } from '../Partials/Container'

export function Copyright() {
  return (
    <div className="border-t border-t-zinc-600 py-4">
      <Container>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <p className="m-0 text-xs text-center md:text-start">
            Cosmopolita {new Date().getFullYear()} ©{' '}
            Todos os direitos reservados
          </p>

          <div>
            <a href="https://sinope.vercel.app/" target="blank" rel="noreferrer">
              <small className="flex flex-row items-center gap-x-1 hover:underline">
                Desenvolvido por <strong>Sinope</strong>
                {/* <img src="/img/logos/logo-bredi.svg" alt="logo bredi" /> */}
              </small>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
