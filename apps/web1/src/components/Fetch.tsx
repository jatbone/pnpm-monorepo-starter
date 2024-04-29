import { useState, useReducer } from 'react'

type FetchState = {
  error: string | null
  greeting: string | null
}

const initialState: FetchState = {
  error: null,
  greeting: null,
}

enum FetchActionTypeEnum {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

type FetchAction = {
  type: FetchActionTypeEnum
  payload: {
    greeting: string | null
    error: string | null
  }
}

function greetingReducer(state = initialState, action: FetchAction) {
  switch (action.type) {
    case FetchActionTypeEnum.SUCCESS: {
      return {
        ...action.payload,
      }
    }
    case FetchActionTypeEnum.ERROR: {
      return {
        ...action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default function Fetch({ url }: { url: string }) {
  const [state, dispatch] = useReducer(greetingReducer, initialState)
  const [buttonClicked, setButtonClicked] = useState(false)

  const fetchGreeting = async () => {
    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error('Failed to fetch')
      }

      const { greeting } = (await res.json()) as { greeting: string }

      dispatch({
        type: FetchActionTypeEnum.SUCCESS,
        payload: {
          error: null,
          greeting,
        },
      })

      setButtonClicked(true)
    } catch (err: unknown) {
      let errPayload: FetchAction['payload']
      if (err instanceof Error) {
        errPayload = {
          error: err.message,
          greeting: null,
        }
      } else {
        errPayload = {
          error: 'An unknown error occurred',
          greeting: null,
        }
      }
      dispatch({
        type: FetchActionTypeEnum.ERROR,
        payload: errPayload,
      })
    }
  }

  const buttonText = buttonClicked ? 'Ok' : 'Load Greeting'
  const { greeting, error } = state
  return (
    <div>
      <button
        onClick={() => fetchGreeting()}
        disabled={buttonClicked}
        data-testid="fetch-button"
      >
        {buttonText}
      </button>
      {greeting && <h1 data-testid="fetch-greeting">{greeting}</h1>}
      {error && <p data-testid="fetch-error">{error}</p>}
    </div>
  )
}
