from datetime import datetime, timedelta, timezone

from sqlalchemy import DateTime, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


def utcnow() -> datetime:
    return datetime.now(timezone.utc)


class CooldownItem(Base):
    __tablename__ = "cooldown_items"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    note: Mapped[str] = mapped_column(Text, default="", nullable=False)
    cooldown_days: Mapped[int] = mapped_column(Integer, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    @property
    def unlocks_at(self) -> datetime:
        return self.created_at + timedelta(days=self.cooldown_days)

    @property
    def is_ready(self) -> bool:
        return utcnow() >= self.unlocks_at
