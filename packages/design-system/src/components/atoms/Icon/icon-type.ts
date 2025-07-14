import KakaoTalk from '../../../assets/icons/KakaoTalk.svg';
import AlertFilled from '../../../assets/icons/alert-filled.svg';
import Alert from '../../../assets/icons/alert.svg';
import ArrowDown from '../../../assets/icons/arrow-down.svg';
import ArrowUp from '../../../assets/icons/arrow-up.svg';
import Arrow from '../../../assets/icons/arrow.svg';
import Calendar from '../../../assets/icons/calendar.svg';
import Camera from '../../../assets/icons/camera.svg';
import Check from '../../../assets/icons/check.svg';
import CheckboxField from '../../../assets/icons/checkbox-field.svg';
import CheckboxFilled from '../../../assets/icons/checkbox-filled.svg';
import CheckboxNonfilled from '../../../assets/icons/checkbox-nonfilled.svg';
import Chevron from '../../../assets/icons/chevron.svg';
import CircleFilled from '../../../assets/icons/circle_filled.svg';
import CloseActive from '../../../assets/icons/close-active.svg';
import Close from '../../../assets/icons/close.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import GeoFill from '../../../assets/icons/geo-fill.svg';
import Geo from '../../../assets/icons/geo.svg';
import GeopointFilled from '../../../assets/icons/geopoint-filled.svg';
import Geopoint from '../../../assets/icons/geopoint.svg';
import Google from '../../../assets/icons/google.svg';
import GuestbookBoard from '../../../assets/icons/guestbook-board.svg';
import GuestbookFilled from '../../../assets/icons/guestbook-filled.svg';
import GuestbookNew from '../../../assets/icons/guestbook-new.svg';
import Guestbook from '../../../assets/icons/guestbook.svg';
import HeartFill from '../../../assets/icons/heart-fill.svg';
import Heart from '../../../assets/icons/heart.svg';
import Help from '../../../assets/icons/help.svg';
import HomeFilled from '../../../assets/icons/home-filled.svg';
import Home from '../../../assets/icons/home.svg';
import Instagram from '../../../assets/icons/instagram.svg';
import MarkerBusStop from '../../../assets/icons/marker-bus_stop.svg';
import MarkerContents from '../../../assets/icons/marker-contents.svg';
import MarkerFleaMarket from '../../../assets/icons/marker-flea_market.svg';
import MarkerFoodTruck from '../../../assets/icons/marker-food_truck.svg';
import MarkerLiquerStore from '../../../assets/icons/marker-liquer_store.svg';
import MarkerPerformanceHall from '../../../assets/icons/marker-performance_hall.svg';
import MarkerPromation from '../../../assets/icons/marker-promation.svg';
import MarkerPub from '../../../assets/icons/marker-pub.svg';
import MarkerSmokingArea from '../../../assets/icons/marker-smoking_area.svg';
import MarkerToilet from '../../../assets/icons/marker-toilet.svg';
import Minus from '../../../assets/icons/minus.svg';
import Mobile from '../../../assets/icons/mobile.svg';
import Moon from '../../../assets/icons/moon.svg';
import Plus from '../../../assets/icons/plus.svg';
import PubFilled from '../../../assets/icons/pub-filled.svg';
import Pub from '../../../assets/icons/pub.svg';
import Refresh from '../../../assets/icons/refresh.svg';
import Search from '../../../assets/icons/search.svg';
import StageEighth from '../../../assets/icons/stage-eighth.svg';
import StageFilled from '../../../assets/icons/stage-filled.svg';
import Stage from '../../../assets/icons/stage.svg';
import StarFill from '../../../assets/icons/star-fill.svg';
import Star from '../../../assets/icons/star.svg';
import Sun from '../../../assets/icons/sun.svg';
import Time from '../../../assets/icons/time.svg';
import Toilet from '../../../assets/icons/toilet.svg';
import Trash from '../../../assets/icons/trash.svg';
import WaitingFilled from '../../../assets/icons/waiting-filled.svg';
import Waiting from '../../../assets/icons/waiting.svg';
import Write from '../../../assets/icons/write.svg';

export type IconTypes =
  | 'KakaoTalk'
  | 'alert'
  | 'alert-filled'
  | 'arrow'
  | 'arrow-down'
  | 'arrow-up'
  | 'calendar'
  | 'camera'
  | 'check'
  | 'checkbox-field'
  | 'checkbox-filled'
  | 'checkbox-nonfilled'
  | 'chevron'
  | 'circle_filled'
  | 'close'
  | 'close-active'
  | 'facebook'
  | 'geo'
  | 'geo-fill'
  | 'geopoint'
  | 'geopoint-filled'
  | 'google'
  | 'guestbook'
  | 'guestbook-board'
  | 'guestbook-filled'
  | 'guestbook-new'
  | 'heart'
  | 'heart-fill'
  | 'help'
  | 'home'
  | 'home-filled'
  | 'instagram'
  | 'marker-bus_stop'
  | 'marker-contents'
  | 'marker-flea_market'
  | 'marker-food_truck'
  | 'marker-liquer_store'
  | 'marker-performance_hall'
  | 'marker-promation'
  | 'marker-pub'
  | 'marker-smoking_area'
  | 'marker-toilet'
  | 'minus'
  | 'mobile'
  | 'moon'
  | 'plus'
  | 'pub'
  | 'pub-filled'
  | 'refresh'
  | 'search'
  | 'stage'
  | 'stage-eighth'
  | 'stage-filled'
  | 'star'
  | 'star-fill'
  | 'sun'
  | 'time'
  | 'toilet'
  | 'trash'
  | 'waiting'
  | 'waiting-filled'
  | 'write';

export const iconMap: Record<IconTypes, React.FC<React.SVGProps<SVGSVGElement>>> = {
  KakaoTalk: KakaoTalk,
  alert: Alert,
  'alert-filled': AlertFilled,
  arrow: Arrow,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  calendar: Calendar,
  camera: Camera,
  check: Check,
  'checkbox-field': CheckboxField,
  'checkbox-filled': CheckboxFilled,
  'checkbox-nonfilled': CheckboxNonfilled,
  chevron: Chevron,
  circle_filled: CircleFilled,
  close: Close,
  'close-active': CloseActive,
  facebook: Facebook,
  geo: Geo,
  'geo-fill': GeoFill,
  geopoint: Geopoint,
  'geopoint-filled': GeopointFilled,
  google: Google,
  guestbook: Guestbook,
  'guestbook-board': GuestbookBoard,
  'guestbook-filled': GuestbookFilled,
  'guestbook-new': GuestbookNew,
  heart: Heart,
  'heart-fill': HeartFill,
  help: Help,
  home: Home,
  'home-filled': HomeFilled,
  instagram: Instagram,
  'marker-bus_stop': MarkerBusStop,
  'marker-contents': MarkerContents,
  'marker-flea_market': MarkerFleaMarket,
  'marker-food_truck': MarkerFoodTruck,
  'marker-liquer_store': MarkerLiquerStore,
  'marker-performance_hall': MarkerPerformanceHall,
  'marker-promation': MarkerPromation,
  'marker-pub': MarkerPub,
  'marker-smoking_area': MarkerSmokingArea,
  'marker-toilet': MarkerToilet,
  minus: Minus,
  mobile: Mobile,
  moon: Moon,
  plus: Plus,
  pub: Pub,
  'pub-filled': PubFilled,
  refresh: Refresh,
  search: Search,
  stage: Stage,
  'stage-eighth': StageEighth,
  'stage-filled': StageFilled,
  star: Star,
  'star-fill': StarFill,
  sun: Sun,
  time: Time,
  toilet: Toilet,
  trash: Trash,
  waiting: Waiting,
  'waiting-filled': WaitingFilled,
  write: Write,
};
