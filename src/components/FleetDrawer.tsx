'use client';
import { ArmadaType } from '@/app/types';
import { useMemo } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import Button from './Button';
import Image from 'next/image';
import Icon from './Icon';
import OrderForm from './OrderForm';

// Helper function to parse URL params into ArmadaType
const parseArmadaFromParams = (params: URLSearchParams): ArmadaType | null => {
  const modal = params.get('modal');
  if (modal !== 'true') return null;

  const name = params.get('name');
  const imagePath = params.get('imageUrl');
  const person = params.get('person');
  const transmission = params.get('transmission');
  const rental = params.get('rental');

  // Validate required fields
  if (!name || !imagePath || !person || !transmission || !rental) {
    return null;
  }

  return {
    name,
    imagePath,
    armadaDetail: {
      person: parseInt(person, 10),
      transmission,
      rental: parseInt(rental, 10),
    },
  };
};

// Helper function to clear dialog params
const clearDialogParams = () => ({
  modal: false,
  name: '',
  imageUrl: '',
  person: '',
  transmission: '',
  rental: '',
});

const FleetDrawer = ({
  params,
  updateUrl,
}: {
  params: URLSearchParams;
  updateUrl: (pathname: string, param: Record<string, any>) => void;
}) => {
  // Use useMemo to avoid unnecessary recalculations
  const armadaDetail = useMemo(() => parseArmadaFromParams(params), [params]);

  const handleClose = () => {
    updateUrl('/', clearDialogParams());
  };

  if (!armadaDetail) return null;

  return (
    <Drawer
      open={Boolean(params.get('modal')) === true}
      onOpenChange={(open) => !open && handleClose()}
    >
      <DrawerContent className="w-full px-3 flex flex-col">
        <DrawerHeader className="flex-row justify-between items-baseline">
          <DrawerTitle className="text-lg mx-auto font-heading">
            Booking Detail
          </DrawerTitle>
        </DrawerHeader>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto px-3">
          <div className="flex flex-col space-y-4 pb-4">
            <div className="flex flex-col justify-center">
              <Image
                src={armadaDetail.imagePath}
                alt={armadaDetail.name}
                width={300}
                height={300}
                className="size-11/12 mx-auto h-auto"
              />
              <h2 className="font-heading capitalize mx-auto text-2xl font-semibold mb-2">
                {armadaDetail.name}
              </h2>
              <div className="w-full flex space-x-4 justify-center">
                <span className="flex items-center space-x-1">
                  <Icon
                    url="/images/armada/icons/armada_user.webp"
                    alt=""
                    height={20}
                    width={20}
                    className="size-3"
                  />
                  <p>{armadaDetail.armadaDetail.person}</p>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon
                    url="/images/armada/icons/armada_transmission.webp"
                    alt=""
                    height={20}
                    width={20}
                    className="size-3"
                  />
                  <p className="capitalize">
                    {armadaDetail.armadaDetail.transmission}
                  </p>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon
                    url="/images/armada/icons/armada_rupiah.webp"
                    alt=""
                    height={20}
                    width={20}
                    className="size-3"
                  />
                  <p>
                    {armadaDetail.armadaDetail.rental}
                    <span className="text-slate-400">/Jam</span>
                  </p>
                </span>
              </div>
            </div>
            <OrderForm />
          </div>
        </div>

        {/* Fixed button at bottom */}
        <div className="sticky bottom-0 bg-background border-t px-3 py-4 mt-auto">
          <Button
            variant="default"
            type="submit"
            form="order-form"
            className="px-4 py-4 w-full bg-green-600"
          >
            <Image
              src={'/icons/icon_whatsapp.webp'}
              alt="icon for whatsapp"
              width={30}
              height={30}
              className="w-6 h-auto"
            />
            <span className="font-semibold text-lg">Kirim Pesan</span>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FleetDrawer;
