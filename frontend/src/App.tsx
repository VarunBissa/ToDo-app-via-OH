import { Route, Routes, Link, Navigate } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">ToDo App</h1>
          <nav className="space-x-4">
            <Link className="text-blue-600 hover:underline" to="/login">Login</Link>
            <Link className="text-blue-600 hover:underline" to="/signup">Sign up</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-medium">Welcome</h2>
          <p className="text-sm text-gray-600">A minimal shell. Auth and todos coming next.</p>
        </div>
      </main>
    </div>
  )
}

function Login() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-full max-w-sm rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">Login</h2>
        <p className="text-sm text-gray-600">Form to be added.</p>
        <div className="mt-4 text-sm">
          <Link className="text-blue-600 hover:underline" to="/signup">Create an account</Link>
        </div>
      </div>
    </div>
  )
}

function Signup() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-full max-w-sm rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">Sign up</h2>
        <p className="text-sm text-gray-600">Form to be added.</p>
        <div className="mt-4 text-sm">
          <Link className="text-blue-600 hover:underline" to="/login">Have an account? Login</Link>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
