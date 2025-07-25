// router/index.tsx
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Crea la instancia de QueryClient aquí
const queryClient = new QueryClient();

// Componentes de página cargados de forma perezosa
const HomePage = lazy(() => import('@/pages/Home/index'));


// El layout principal de tu aplicación
const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-[80px]">
        {/* Un único Suspense para todas las rutas hijas */}
        <Suspense fallback={<div>Cargando página...</div>}>
          <Outlet /> {/* Aquí es donde se renderizará la ruta activa */}
        </Suspense>
      </main>
    </div>
  </QueryClientProvider>
);


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // El layout es el elemento principal
    // Las rutas hijas se renderizarán dentro del <Outlet />
    children: [
      {
        index: true, // Esta es la ruta por defecto para '/'
        element: <HomePage />,
      },
      // ... más rutas hijas
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;