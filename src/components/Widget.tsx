import { CheckIcon, ClockIcon, CurrencyIcon } from '@/icons';
import { Button } from './ui/button';
import Image from 'next/image';
import { Separator } from './ui/separator';

const Widget = ({ tripTitle }: { tripTitle: string | undefined }) => {
  return (
    <aside className="sticky top-40 w-full bg-gray-100 flex flex-col space-y-4 p-4 rounded-lg">
      <h2 className="font-semibold text-3xl lg:text-2xl lg:w-3/4">
        {tripTitle}
      </h2>
      <ul className="space-y-4">
        <li className="space-y-2">
          <span className="flex items-center space-x-2">
            <CurrencyIcon className="text-custom w-8 lg:w-5 h-auto" />
            <h4 className="text-lg lg:text-base font-medium">
              Jaminan Harga Terbaik
            </h4>
          </span>
          <p className="text-sm text-gray-600 leading-relaxed">
            Hipster ipsum tattooed brunch I'm baby. Ascot whatever slow-carb
            stumptown vape semiotics trust echo. Tile taxidermy activated +1
            air.
          </p>
        </li>
        <li className="space-y-2">
          <span className="flex items-center space-x-2">
            <CheckIcon className="text-custom w-8 lg:w-5 h-auto" />
            <h4 className="text-lg lg:text-base font-medium">
              Jaminan Harga Terbaik
            </h4>
          </span>
          <p className="text-sm text-gray-600 leading-relaxed">
            Hipster ipsum tattooed brunch I'm baby. Ascot whatever slow-carb
            stumptown vape semiotics trust echo. Tile taxidermy activated +1
            air.
          </p>
        </li>
        <li className="space-y-2">
          <span className="flex items-center space-x-2">
            <ClockIcon className="text-custom w-8 lg:w-5 h-auto" />
            <h4 className="text-lg lg:text-base font-medium">
              Jaminan Harga Terbaik
            </h4>
          </span>
          <p className="text-sm text-gray-600 leading-relaxed">
            Hipster ipsum tattooed brunch I'm baby. Ascot whatever slow-carb
            stumptown vape semiotics trust echo. Tile taxidermy activated +1
            air.
          </p>
        </li>
      </ul>
      <Separator />
      <Button
        variant="default"
        type="submit"
        className="px-4 py-4 lg:py-2.5 mt-4 lg:mt-auto w-full bg-green-600"
      >
        <Image
          src={'/icons/icon_whatsapp.webp'}
          alt="icon for whatsapp"
          width={30}
          height={30}
          className="w-6 lg:w-5 h-auto"
        />
        <p className="font-semibold">Booking Sekarang</p>
      </Button>
    </aside>
  );
};

export default Widget;
