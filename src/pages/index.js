import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router'
import appConfig from '../../config.json';



function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['300']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
  //const username = 'alissonjosef'
  const [username, setUsername] = React.useState('')
  const rotas = useRouter()

  return (
    <>
      
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[1010],
          backgroundImage: 'url(https://miro.medium.com/max/6706/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(event)=>{
              event.preventDefault()
              rotas.push('/chat')
              /* window.location.href = '/chat' */
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            {/* <input type='text' value={username} onChange={(event) =>{
              const valor = event.target.value
              setUsername(valor)  
              }}/> */}

            <TextField
              value={username}
               onChange={(event) =>{
                const valor = event.target.value
                setUsername(valor)  
                }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[1020],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[1000],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[1020],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            {username.length >= 2 ? (
              <>
              <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
              </>
            ):(
              <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`data:image/png;base64,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`}
            />
            )}
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}