import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactStateUpdater from './Examples/reactStateUpdater.jsx'
import ReactStateBatchUpdate from './Examples/reactStatBatchUpdate.jsx'
import ParentToChild from './Examples/sharingComponent/ParentToChild.jsx'
import ChildToParent from './Examples/sharingComponent/ChildToParent.jsx'
import ChildToSiblings from './Examples/sharingComponent/ChildToSiblings.jsx'
import CousinToCousin from './Examples/sharingComponent/CousinToCousin.jsx'
import ObjectArrayState from './Examples/ObjectArrayState.jsx'
import FormIntro from './Examples/FormIntro.jsx'
import UseActionState from './Examples/UseActionState.jsx'
import ControlledComponents from './Examples/ControlledComponents.jsx'
import ReactHookForm from './Examples/ReactHookForm.jsx'
import UseReducerHook from './Examples/UseReducerHook.jsx'
import UseEffectHook from './Examples/UseEffectHook.jsx'
import UseContextApp from './useContextExamples/UseContextApp.jsx'
import ThemeUseCase from './useContextExamples/ThemeUseCase1.jsx'
import UserAuthUseCase from './useContextExamples/UserAuthUseCase2.jsx'
import CustomHook from './Examples/customHooks/CustomHook.jsx'
import CustomHookDataFecthing from './CustomHookDataFetching/CustomHookDataFecthing.jsx'
import ShowCachedPostsCount from './MutationAndQueryClient/ShowCachedPostsCount.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddPost from './MutationAndQueryClient/AddPost.jsx'
import PostsList from './MutationAndQueryClient/PostsList.jsx'
import RoutesIntroApp from './Examples/RoutesIntroApp.jsx'
import ReactRouterNavigation from './Examples/ReactRouterNavigation.jsx'
import DynamicRoutes from './Examples/DynamicRoutes.jsx'
import ProtectedRoutes from './Examples/ProtectedRoutes.jsx'
import LazyLoadingApp from './Examples/LazyLoadingAndSplitting/LazyLoadingApp.jsx'
import ReactRouterv7 from './Examples/ReactRouterv7.jsx'
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ReactStateUpdater /> */}
    {/* <ReactStateBatchUpdate /> */}
    {/* <ParentToChild /> */}
    {/* <ChildToParent /> */}
    {/* <ChildToSiblings /> */}
    {/* <CousinToCousin /> */}
    {/* <ObjectArrayState /> */}
    {/* <FormIntro /> */}
    {/* <UseActionState /> */}
    {/* <ControlledComponents /> */}
    {/* <ReactHookForm /> */}
    {/* <UseReducerHook /> */}
    {/* <UseEffectHook /> */}
    {/* <UseContextApp /> */}
    {/* <ThemeUseCase /> */}
    {/* <UserAuthUseCase /> */}
    {/* <CustomHook /> */}
    {/* <CustomHookDataFecthing /> */}
    {/* <QueryClientProvider client={queryClient}>
      <PostsList />
      <AddPost />
      <ShowCachedPostsCount />
    </QueryClientProvider> */}
    {/* <RoutesIntroApp /> */}
    {/* <ReactRouterNavigation /> */}
    {/* <DynamicRoutes /> */}
    {/* <ProtectedRoutes /> */}
    {/* <LazyLoadingApp /> */}
    <ReactRouterv7 />
  </StrictMode>,
)
